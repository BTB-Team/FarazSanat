import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
// تصویر پس‌زمینه عریض کارخانه را در این مسیر ست کنید
import AboutBg from '@/assets/images/hero-bg.jpg'; 

export default function AboutHero() {
  return (
    // 🚀 هیروی کشیده و باابهت کاملاً هماهنگ با صفحه پروژه‌ها (RTL دری)
    <section className="relative w-full bg-industrialBlack text-white overflow-hidden select-none font-yekan border-b border-white/5 py-24 sm:py-28 lg:py-32">
      
      {/* 🛠️ اصلاح اصلی ۱: تصویر پس‌زمینه با اوورلی (Overlay) بسیار روشن‌تر و شفاف‌تر */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-60 transition-transform duration-[2000ms] hover:scale-105"
          style={{ backgroundImage: `url(${AboutBg})` }}
        />
        {/* لایه شفاف تیره ملایم‌تر (۴۰ درصد) برای روشن‌تر شدن عکس و حفظ خوانایی ۱۰۰٪ کلمات */}
        <div className="absolute inset-0 bg-gradient-to-t from-industrialBlack/80 via-industrialBlack/40 to-transparent" />
      </div>

      {/* 📢 محتوای متنی و عنوان غول‌پیکر مجهز به انیمیشن فریمور موشن */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl text-right flex flex-col items-start space-y-4">
          
          {/* عنوان غول‌پیکر با فونت استعداد ۹۰۰ دقیقاً مشابه صفحه پروژه‌ها */}
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 50, damping: 14 }}
            className="font-estedad font-black text-4xl sm:text-5xl md:text-6xl text-white leading-tight tracking-tight"
          >
            درباره فابریکه ما
          </motion.h1>

          {/* توضیحات مینی‌مال و مسلکی درباره اصالت شرکت */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 50, damping: 14, delay: 0.1 }}
            className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal"
          >
            شناسنامه رسمی، اهداف استراتژیک، ارزش‌های پایدار و لست توانمندی‌های سخت‌افزاری شرکت تولیدی صنعتی هنگرسازی و لفت‌سازی فراز صنعت.
          </motion.p>

          {/* مسیر راهنمای مینی‌مال (ساده و بدون بردکرامب فانتزی) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-400 font-light pt-2"
          >
            <div className="flex items-center  gap-3 text-sm">
              <Link
                to="/"
                className="text-gray-300 transition hover:text-white"
              >
                خانه
              </Link>
              <span>‹</span>
              <span className="text-[#19a866]">در باره کارخانه</span>
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
