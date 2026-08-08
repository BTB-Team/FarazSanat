import React, { useState } from 'react';
import { Loader2, CheckCircle2, AlertCircle, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const INITIAL_VALUES = { name: '', phone: '', message: '' };

// اعتبارسنجی ساده سمت کلاینت — هر خطا با کلید فیلد مربوطه ذخیره می‌شود
function validate(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = 'نام الزامی است.';
  }

  if (!values.phone.trim()) {
    errors.phone = 'شماره تماس الزامی است.';
  } else if (!/^0\d{9}$/.test(values.phone.trim())) {
    errors.phone = 'شماره تماس معتبر وارد کنید (مثال: 0799000000).';
  }

  if (!values.message.trim()) {
    errors.message = 'پیام نمی‌تواند خالی باشد.';
  } else if (values.message.trim().length < 10) {
    errors.message = 'پیام باید حداقل ۱۰ حرف باشد.';
  }

  return errors;
}

// TODO: بک‌اند هنوز آماده نیست — این تابع فقط شبیه‌سازی ارسال است.
// وقتی API واقعی آماده شد، این تابع را با یک فراخوانی axios جایگزین کنید، مثلا:
// await axios.post('/api/contact', values)
function fakeSubmit() {
  return new Promise((resolve) => {
    setTimeout(() => {
      // برای تست حالت خطا، این خط را با reject(new Error(...)) جایگزین کنید
      resolve({ ok: true });
    }, 1200);
  });
}

// استایل مشترک اینپوت‌های زیرخط‌دار این صفحه — عمداً از کلاس مشترک .form-input
// استفاده نشده چون این ظاهر (فقط خط زیرین) مخصوص همین صفحه است، نه کل سایت
const underlineInput =
  'w-full bg-transparent border-0 border-b-2 border-slate-200 focus:border-industrialGreen ' +
  'focus:outline-none px-0 py-3 text-industrialBlack placeholder:text-slate-400 ' +
  'transition-colors duration-200 disabled:opacity-60 font-yekan';

export default function ContactForm() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  // status یکی از این چهار حالت است: idle | loading | success | error
  const [status, setStatus] = useState('idle');

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

    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus('loading');
    try {
      await fakeSubmit(values);
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
      className="relative z-10 bg-white rounded-2xl shadow-xl shadow-slate-900/5 p-8 sm:p-10"
    >
      <h2 className="font-Estedad text-2xl sm:text-3xl font-extrabold text-industrialBlack mb-3">
        تماس با ما
      </h2>
      <span className="block w-14 h-1 bg-industrialGreen rounded-full mb-8" />

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        <div>
          <input
            id="name"
            name="name"
            type="text"
            className={underlineInput}
            placeholder="نام و تخلص خود را وارد کنید"
            value={values.name}
            onChange={handleChange}
            disabled={isLoading}
            aria-label="نام و تخلص"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-sm text-red-600">{errors.name}</p>
          )}
        </div>

        <div>
          <input
            id="phone"
            name="phone"
            type="tel"
            className={underlineInput}
            placeholder="یک شماره تماس معتبر وارد کنید"
            value={values.phone}
            onChange={handleChange}
            disabled={isLoading}
            aria-label="شماره تماس"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1.5 text-sm text-red-600">{errors.phone}</p>
          )}
        </div>

        <div>
          <textarea
            id="message"
            name="message"
            rows={4}
            className={`${underlineInput} resize-none`}
            placeholder="پیام خود را بنویسید"
            value={values.message}
            onChange={handleChange}
            disabled={isLoading}
            aria-label="پیام"
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && (
            <p id="message-error" className="mt-1.5 text-sm text-red-600">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="btn-secondary w-auto px-8 uppercase tracking-wide text-sm flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              در حال ارسال...
            </>
          ) : (
            <>
              <Send size={16} />
              ارسال
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
