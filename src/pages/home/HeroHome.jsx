import { Link } from 'react-router-dom';
import { ArrowLeftRight, ShieldCheck, Factory, Calendar, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

// تصویر پس‌زمینه باکیفیت خود را در این مسیر ست کنید
import HeroBg from '@/assets/images/hero-1.jpg'; 
import StatsBg from '@/assets/images/black-2.jpg';

export default function HeroHome() {
    // متغییر ها برای انیمیشن هیرو
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
    };
      
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 60, damping: 15 } }
    };
    // متفییر ها برای انیمیشن سیکشن آمار
    const statsContainerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.1 }
      }
    };
    
    const statsItemVariants = {
      hidden: { opacity: 0, y: 40 },
      visible: { 
        opacity: 1, 
        y: 0, 
        transition: { type: 'spring', stiffness: 50, damping: 14 } 
      }
    };
      
  return (
    <div className="w-full font-yekan select-none bg-industrialBlack">
      
      {/* 🚀 بخش اول: بنر غول‌پیکر تمام‌صفحه (Full Screen Hero) */}
      <motion.section 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative h-[calc(100vh-96px)] flex items-center overflow-hidden border-b border-white/5"
        >
        
          {/* تصویر پس‌زمینه با افکت انیمیشن ورودی بزرگ‌نمایی نرم (Zoom-in) */}
          <div className="absolute inset-0 z-0">
            <motion.div 
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.4 }}
              transition={{ duration: 2.2, ease: 'easeOut' }}
              className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-[2000ms] hover:scale-105"
              style={{ backgroundImage: `url(${HeroBg})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-industrialBlack via-industrialBlack/20 to-transparent" />
          </div>

          {/* محتوای متنی و دکمه‌ها با پدینگ و تراز عالی */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="max-w-3xl text-right flex flex-col items-start space-y-6">

              {/* نشان کوچک مدرن بالای عنوان */}
              <motion.div 
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 text-xs font-medium text-slate-300 backdrop-blur-md rounded-full"
              >
                <span className="w-2 h-2 bg-industrialGreen rounded-full animate-ping" />
                <span>بزرگترین مجتمع محاسبات و ساخت سازه‌های فلزی</span>
              </motion.div>

              {/* عنوان اصلی غول‌پیکر با فونت استعداد ۹۰۰ */}
              <motion.h1 
                variants={itemVariants}
                className="font-estedad font-black text-4xl sm:text-5xl md:text-6xl text-white leading-[1.3] tracking-tight "
              >
                {/* سازه‌های مستحکم ، <span className="text-industrialGreen">مهندسی دقیق</span> ، پوشش سراسری */}
                سازه های مستحکم ، مهندسی دقیق ، پوشش سراسری
              </motion.h1>

              {/* توضیحات مسلکی */}
              <motion.p 
                variants={itemVariants}
                className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal"
              >
                شرکت فراز صنعت متخصص در طراحی معیاری، تولید قطعات پیش‌ساخته در کارخانه و نصب سریع انواع هنگرها، سوله‌های صنعتی و سالن‌های بزرگ تولیدی در سراسر افغانستان با استانداردهای بین‌المللی مقاومت فنی.
              </motion.p>

              {/* دکمه‌های کپسولی دوقلو با افکت‌های سایه و حرکت مدرن */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-wrap gap-4 pt-4"
              >
                <Link 
                  to="/contact" 
                  className="px-8 py-3.5 bg-industrialGreen hover:bg-industrialGreen/90 text-white rounded-xl shadow-lg shadow-industrialGreen/20 hover:shadow-industrialGreen/40 hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center gap-2 group text-sm"
                >
                  <span>درخواست مشاوره فنی</span>
                  <ArrowLeftRight className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                </Link>

                <Link 
                  to="/projects" 
                  className="px-8 py-3.5 bg-[#0b0b0b]/60 hover:bg-[#0b0b0b]/90 text-white rounded-xl border border-white/25 hover:border-white shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-sm text-center inline-block"
                >
                  کاتالوگ پروژه‌ها
                </Link>
              </motion.div>

            </div>
          </div>

          {/* آیکون راهنمای اسکرول در پایین بنر */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.4 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-slate-400 gap-1 animate-bounce"
          >
            <span className="text-[10px] uppercase tracking-widest font-light">اسکرول کنید</span>
            <ChevronDown className="w-4 h-4" />
          </motion.div>

        </motion.section>


      
      
      {/* 📊 بخش دوم: نوار آمار ۳ ستونه شرکتی، تفکیک‌شده و لوکس (بعد از اسکرول) */}

      <section className="relative w-full py-16 lg:py-24 overflow-hidden select-none bg-industrialBlack font-yekan">
    
        {/* ۱. لایه تصویر پس‌زمینه با کیفیت بالا */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-[2000ms] hover:scale-105"
            style={{ backgroundImage: `url(${StatsBg})` }}
          />
          {/* لایه شفاف تاریک (Overlay) برای تضمین خوانایی ۱۰۰٪ متون و سفید نشدن کلمات */}
          <div className="absolute inset-0 bg-industrialBlack/60 backdrop-blur-[2px]" />
        </div>
    
        {/* ۲. محتوای آمار بدون هیچ کارت و باکس اضافی (تبدیل به motion.div جهت اجرای سیستم اسکرول تریگر) */}
        <motion.div 
          variants={statsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // انیمیشن زمانی شروع می‌شود که ۲۰٪ سکشن در صفحه دیده شود
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full"
        >
          {/* چیدمان گرید: در موبایل ۱ ستونه، در تبلت و دسکتاپ ۳ ستونه */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-white">
              
            {/* ستون اول: سابقه (تبدیل به motion.div برای بالا آمدن متحرک) */}
            <motion.div 
              variants={statsItemVariants}
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 text-center sm:text-right group"
            >
              <div className="p-3 bg-white/10 rounded-xl text-white border border-white/10 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Calendar className="w-8 h-8 filter drop-shadow-[0_0_8px_rgba(27,82,56,0.6)]" />
              </div>
              <div className="flex flex-col">
                {/* عدد غول‌پیکر با فونت استعداد ۹۰۰ */}
                <span className="text-4xl lg:text-5xl font-black font-estedad text-white tracking-wide">
                  ۱۵+ سال
                </span>
                <span className="text-sm lg:text-base text-slate-300 mt-1 font-light">
                  سابقه درخشان در صنایع فلزی
                </span>
              </div>
            </motion.div>
    
            {/* ستون دوم: پروژه‌ها */}
            <motion.div 
              variants={statsItemVariants}
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 text-center sm:text-right group"
            >
              <div className="p-3 bg-white/10 rounded-xl text-white border border-white/10 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Factory className="w-8 h-8 filter drop-shadow-[0_0_8px_rgba(27,82,56,0.6)]" />
              </div>
              <div className="flex flex-col">
                <span className="text-4xl lg:text-5xl font-black font-estedad text-white tracking-wide">
                  ۱۲۰+ پروژه
                </span>
                <span className="text-sm lg:text-base text-slate-300 mt-1 font-light">
                  هنگر و سوله تحویل داده شده
                </span>
              </div>
            </motion.div>
    
            {/* ستون سوم: ظرفیت تولید */}
            <motion.div 
              variants={statsItemVariants}
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 text-center sm:text-right group"
            >
              <div className="p-3 bg-white/10 rounded-xl text-white border border-white/10 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck className="w-8 h-8 filter drop-shadow-[0_0_8px_rgba(27,82,56,0.6)]" />
              </div>
              <div className="flex flex-col">
                <span className="text-4xl lg:text-5xl font-black font-estedad text-white tracking-wide">
                  ۴۰+ تُن
                </span>
                <span className="text-sm lg:text-base text-slate-300 mt-1 font-light">
                  ظرفیت تولید روزانه کارخانه
                </span>
              </div>
            </motion.div>
    
          </div>
    </motion.div>
          
  </section>
  
    </div>
  );
}
