import { useState, useRef, useEffect } from 'react';
import { Loader2, CheckCircle2, AlertCircle, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { z } from 'zod';

const INITIAL_VALUES = { name: '', phone: '', message: '' };

// حداقل فاصله زمانی مجاز بین دو تلاش برای ارسال فرم (ms) — طبق بند «کنترل زمان»
// سند استانداردهای امنیتی، برای جلوگیری از کلیک‌های رگباری ربات/کاربر
const SUBMIT_THROTTLE_MS = 1500;

// هیچ تگ HTML (مثل <script>) در ورودی پذیرفته نمی‌شود — بند ۱ سند امنیتی.
// توجه: ری‌اکت به‌خودی‌خود innerHTML را اجرا نمی‌کند، پس این یک لایه محافظتی
// اضافه (defense-in-depth) است، نه تنها خط دفاعی در برابر XSS.
const noHtmlTags = (val) => !/[<>]/.test(val);

// طرح اعتبارسنجی مطابق بند ۳ سند: محدودیت طول کاراکترها
const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, 'نام الزامی است.')
    .max(50, 'نام نباید بیشتر از ۵۰ کاراکتر باشد.')
    .refine(noHtmlTags, 'کاراکترهای غیرمجاز (< >) در نام استفاده نشود.'),
  // فقط عدد، حداقل ۹ و حداکثر ۱۴ رقم — طبق استانداردهای مخابراتی افغانستان
  phone: z
    .string()
    .trim()
    .min(1, 'شماره تماس الزامی است.')
    .regex(/^\d{9,14}$/, 'شماره تماس باید فقط عدد و بین ۹ تا ۱۴ رقم باشد.'),
  message: z
    .string()
    .trim()
    .min(10, 'پیام باید حداقل ۱۰ حرف باشد.')
    .max(500, 'پیام نباید بیشتر از ۵۰۰ کاراکتر باشد.')
    .refine(noHtmlTags, 'کاراکترهای غیرمجاز (< >) در پیام استفاده نشود.'),
});

// خروجی zod (issues) را به همان شکل { fieldName: message } که UI انتظار دارد تبدیل می‌کند
function validate(values) {
  const result = contactSchema.safeParse(values);
  if (result.success) return {};

  const errors = {};
  for (const issue of result.error.issues) {
    const field = issue.path[0];
    if (!errors[field]) errors[field] = issue.message;
  }
  return errors;
}

// TODO(reCAPTCHA v3): برای فعال شدن واقعی، یک site key از
// https://www.google.com/recaptcha/admin برای دامنه سایت بگیرید و در
// فایل .env به‌صورت VITE_RECAPTCHA_SITE_KEY=... قرار دهید.
// بدون این مقدار، این بخش به‌صورت امن نادیده گرفته می‌شود (فرم همچنان کار می‌کند).
// مهم: توکن reCAPTCHA به‌تنهایی در فرانت‌اند امنیت ایجاد نمی‌کند — بک‌اند هم
// باید توکن را با secret key نزد گوگل تایید (verify) کند.
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

function loadRecaptchaScript(siteKey) {
  if (document.querySelector('script[data-recaptcha]')) return;
  const script = document.createElement('script');
  script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
  script.async = true;
  script.dataset.recaptcha = 'true';
  document.head.appendChild(script);
}

async function getRecaptchaToken() {
  if (!RECAPTCHA_SITE_KEY || !window.grecaptcha) return null;
  try {
    return await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'contact_submit' });
  } catch {
    return null; // اگر reCAPTCHA شکست خورد، فرم را قفل نمی‌کنیم — فقط بدون توکن ارسال می‌شود
  }
}

// TODO: بک‌اند هنوز آماده نیست — این تابع فقط شبیه‌سازی ارسال است.
// وقتی API واقعی آماده شد، این تابع را با یک فراخوانی axios جایگزین کنید.
// طبق بند ۴ سند امنیتی: آدرس بک‌اند باید همیشه با https:// شروع شود، هرگز http://
// مثلا: await axios.post('https://api.farazsanat.af/contact', { ...values, recaptchaToken })
function fakeSubmit() {
  return new Promise((resolve) => {
    setTimeout(() => {
      // برای تست حالت خطا، این خط را با reject(new Error(...)) جایگزین کنید
      resolve({ ok: true });
    }, 1200);
  });
}

export default function ContactForm() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  // status یکی از این چهار حالت است: idle | loading | success | error
  const [status, setStatus] = useState('idle');
  const lastAttemptRef = useRef(0);

  useEffect(() => {
    if (RECAPTCHA_SITE_KEY) loadRecaptchaScript(RECAPTCHA_SITE_KEY);
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    // به محض تایپ دوباره، خطای همان فیلد پاک می‌شود
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // کنترل زمان: صرف‌نظر از نتیجه اعتبارسنجی، کلیک‌های رگباری نادیده گرفته می‌شوند
    const now = Date.now();
    if (isLoading || now - lastAttemptRef.current < SUBMIT_THROTTLE_MS) return;
    lastAttemptRef.current = now;

    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus('loading');
    try {
      const recaptchaToken = await getRecaptchaToken();
      await fakeSubmit({ ...values, recaptchaToken });
      setStatus('success');
      setValues(INITIAL_VALUES);
    } catch {
      setStatus('error');
    }
  }

  const isLoading = status === 'loading';

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-600 mb-1.5">
              نام و تخلص
            </label>
            <input
              id="name"
              name="name"
              type="text"
              maxLength={50}
              className="form-input"
              placeholder="نام شما"
              value={values.name}
              onChange={handleChange}
              disabled={isLoading}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && (
              <p id="name-error" className="mt-1.5 text-sm text-red-600">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-600 mb-1.5">
              شماره تماس
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="numeric"
              maxLength={14}
              className="form-input"
              dir="ltr"
              placeholder="0799000000"
              value={values.phone}
              onChange={handleChange}
              disabled={isLoading}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
            />
            {errors.phone && (
              <p id="phone-error" className="mt-1.5 text-sm text-red-600">{errors.phone}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-600 mb-1.5">
            پیام
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            maxLength={500}
            className="form-input resize-none"
            placeholder="پیام خود را بنویسید..."
            value={values.message}
            onChange={handleChange}
            disabled={isLoading}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          <div className="mt-1.5 flex items-center justify-between">
            {errors.message ? (
              <p id="message-error" className="text-sm text-red-600">{errors.message}</p>
            ) : <span />}
            <span className="text-xs text-slate-400">{values.message.length}/500</span>
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="btn-primary w-full flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              در حال ارسال...
            </>
          ) : (
            <>
              <Send size={16} />
              ارسال پیام
            </>
          )}
        </button>

        {status === 'success' && (
          <p className="flex items-center gap-2 text-sm text-industrialGreen border-t border-slate-100 pt-4">
            <CheckCircle2 size={18} />
            پیام شما با موفقیت ارسال شد. به زودی با شما تماس می‌گیریم.
          </p>
        )}
        {status === 'error' && (
          <p className="flex items-center gap-2 text-sm text-red-600 border-t border-slate-100 pt-4">
            <AlertCircle size={18} />
            ارسال پیام ناموفق بود. لطفا دوباره تلاش کنید.
          </p>
        )}
      </form>
    </motion.div>
  );
}
