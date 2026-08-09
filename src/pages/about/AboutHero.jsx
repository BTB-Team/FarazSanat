import { motion } from 'framer-motion';
import { Factory } from 'lucide-react';
import AboutBg from '@/assets/images/hero-bg.jpg';

export default function AboutHero() {
  return (
    // بنر با ارتفاع فشرده ۳۰ درصد مانیتور و پس‌زمینه تیره عمیق صنعتی
    <section className="relative min-h-[30vh] md:h-[280px] flex items-center bg-[#0a0d14] text-white overflow-hidden select-none font-yekan border-b border-white/5">
      
      {/* ۱. لایه تصویر پس‌زمینه محو (Opacity 20%) جهت زنده کردن بافت آهن و صنعت */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${AboutBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14] via-transparent to-[#0a0d14]/70" />
      </div>

      {/* ۲. محتوای متنی مجهز به انیمیشن ورودی نرم از بالا به پایین (Fade-in Down) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 50, damping: 12, delay: 0.1 }}
          className="max-w-3xl text-right flex flex-col items-start space-y-4"
        >
          
          {/* نشان کوچک و لوکس بالای عنوان */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-slate-300 backdrop-blur-md">
            <Factory className="w-3.5 h-3.5 text-industrialGreen" />
            <span>بیش از یک دهه اصالت و تخصص مهندسی در کشور</span>
          </div>

          {/* عنوان اصلی غول‌پیکر با فونت استعداد ۹۰۰ (بدون بردکرامب) */}
          <h1 className="font-estedad font-black text-3xl sm:text-4xl md:text-5xl text-white leading-tight tracking-tight">
            درباره فابریکه <span className="text-industrialGreen">فراز صنعت</span>
          </h1>

          {/* خط دکوراتیو سبز سازمانی زیر عنوان برای هدایت چشم */}
          <div className="w-16 h-1 bg-industrialGreen rounded-full mt-1" />

        </motion.div>
      </div>

    </section>
  );
}
