import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, ShieldCheck, ArrowUpRight } from 'lucide-react';
// ایمپورت لوگو به عنوان ماژول جهت لود قطعی و بدون باگ در GitHub Pages
import FarazSanatLogo from '@/assets/logo.webp'; 

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // بدنه اصلی فوتر با رنگ سیاه صنعتی عمیق و متون خاکستری روشن
    <footer className="bg-industrialBlack text-slate-400 font-yekan select-none border-t border-slate-900 pt-16 pb-8 relative overflow-hidden">
      
      {/* کانتینر اصلی محتوا */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* سیستم گرید: در موبایل ۱ ستونه، در تبلت ۲ ستونه و در دسکتاپ ۳ ستونه */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12 pb-12 border-b border-white/5">
          
          {/*ستون اول: معرفی و هویت حقوقی برند (راست‌چین - ۵ ستون از ۱۲) */}
          <div className="lg:col-span-5 text-right flex flex-col items-start space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              {/* 🛑 تگ ایمیج اختصاصی لوگو هماهنگ با دیپلوی گیت‌هاب پیجز */}
              <img 
                src={FarazSanatLogo} 
                alt="لوگوی رسمی شرکت فراز صنعت" 
                className="h-10 md:h-12 w-auto object-contain transition-transform duration-500 group-hover:rotate-6"
              />
              <div className="flex flex-col border-r border-white/10 pr-3">
                <span className="font-sahel font-black text-lg md:text-xl text-white tracking-wider">
                  فراز <span className="text-industrialGreen">صنعت</span>
                </span>
                <span className="text-[9px] text-slate-500 font-light tracking-widest uppercase">
                  Faraz Sanat Company
                </span>
              </div>
            </Link>
            
            <p className="text-sm text-slate-400 leading-relaxed font-normal pt-2">
              فابریکه هنگرسازی و فلزکاری فراز صنعت، پیشرو در محاسبات فنی، طراحی نقشه‌های شاپ و ساخت اسکلت‌های فلزی سنگین صنعتی در سراسر کشور با تکیه بر دانش مهندسی مدرن و تجهیزات معیاری کارخانه.
            </p>

            {/* نشان لایسنس رسمی دولت */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-industrialGreen" />
              <span>دارنده جواز رسمی نمبر D-54634 وزارت صنعت و تجارت</span>
            </div>
          </div>

          {/* 🔗 ستون دوم: لینک‌ها و دسترسی سریع (وسط - ۳ ستون از ۱۲) */}
          <div className="lg:col-span-3 text-right flex flex-col items-start space-y-4 lg:pr-8">
            <h3 className="font-estedad font-bold text-base text-white border-b-2 border-industrialGreen pb-1.5 rounded-sm">
              دسترسی سریع
            </h3>
            <ul className="space-y-3 text-sm font-medium">
              {[
                { name: 'صفحه اصلی سایت', path: '/' },
                { name: 'پروسه و خدمات فنی', path: '/services' },
                { name: 'کاتالوگ  پروژه‌ها', path: '/projects' },
                { name: 'درباره ما و کارخانه', path: '/about' },
                { name: 'ارتباط و دفاتر فروش', path: '/contact' }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link 
                    to={link.path} 
                    className="hover:text-industrialGreen text-slate-400 flex items-center gap-1 transition-colors duration-200 group"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-industrialGreen" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 📍 ستون سوم: اطلاعات رسمی ارتباطات (چپ - ۴ ستون از ۱۲) */}
          <div className="lg:col-span-4 text-right flex flex-col items-start space-y-4">
            <h3 className="font-estedad font-bold text-base text-white border-b-2 border-industrialGreen pb-1.5 rounded-sm">
              دفتر مرکزی و کارخانه
            </h3>
            <ul className="space-y-4 text-sm font-light text-slate-300">
              {/* آدرس */}
              <li className="flex items-start gap-3">
                <div className="p-2 bg-white/5 rounded-lg border border-white/5 text-industrialGreen mt-0.5 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-white text-xs"> آدرس دفتر مرکزی:</span>
                  <span className="text-slate-400 text-xs mt-0.5 leading-relaxed">ناحیه 5 سرک کمپنی بالاتر از پل کمپنی قلعه حیدر خان، کابل، افغانستان </span>
                </div>
              </li>
              {/* تلفن */}
              <li className="flex items-start gap-3">
                <div className="p-2 bg-white/5 rounded-lg border border-white/5 text-industrialGreen mt-0.5 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-white text-xs">ارتباط مستقیم بخش مهندسی:</span>
                  <a href="tel:+93799123456" className="text-slate-400 text-xs mt-0.5 hover:text-industrialGreen transition-colors tracking-wide" dir="ltr">+۹۳۷۹۹۸۵۹۵۵۷</a>
                </div>
              </li>
              {/* ایمیل */}
              <li className="flex items-start gap-3">
                <div className="p-2 bg-white/5 rounded-lg border border-white/5 text-industrialGreen mt-0.5 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-white text-xs">مکاتبات اداری و رسمی:</span>
                  <a href="mailto:info@farazsanat.com" className="text-slate-400 text-xs mt-0.5 hover:text-industrialGreen transition-colors tracking-wide">Abbasax19@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* ⚖️ نوار پایانی: کپی‌رایت حقوقی (Copyright Bar) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-light">
          <div>
            <p>طراحی و توسعه فنی: <span className="font-medium text-slate-400">تیم فرانت‌ند ‌BTB </span></p>
          </div>
          <div className="text-center sm:text-left">
            <p>© {currentYear} فابریکه هنگرسازی فراز صنعت. تمام حقوق مادی و معنوی محفوظ است.</p>
          </div>
        </div>

      </div>
    </footer>
  );
}

