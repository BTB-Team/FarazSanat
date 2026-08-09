import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGrid, Weight, MapPin, ArrowLeft, ChevronRight, ChevronLeft } from 'lucide-react';
import { mockProjects } from '@/data/mockData';

export default function FeaturedCarousel() {
  // ۱. دریافت پروژه‌های شاخص از فایل دیتای مرجع
  const featuredProjects = mockProjects.filter(project => project.isFeatured);
  const [currentIndex, setCurrentIndex] = useState(0);

  // مدیریت حرکت به اسلاید بعدی و قبلی
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredProjects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + featuredProjects.length) % featuredProjects.length);
  };

  const currentProject = featuredProjects[currentIndex];

  return (
    // 🛠️ اصلاح پدینگ‌های عمودی (py-12 lg:py-16) جهت فشرده‌تر شدن و جاگیری کامل سلایدر در صفحه
    <section className="w-full bg-industrialGray py-12 lg:py-16 select-none font-yekan border-b border-slate-200">
      
      {/* انیمیشن ورودی کل سکشن با اسکرول کاربر */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ type: 'spring', stiffness: 50, damping: 15 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        
        {/* عنوان بخش سلایدر */}
        <div className="text-right mb-8 md:mb-10">
          <h2 className="font-estedad font-black text-xl sm:text-2xl md:text-3xl text-industrialBlack mb-2">
            پروژه‌های شاهکار و شاخص شرکت
          </h2>
          <div className="w-16 h-1.5 bg-industrialGreen rounded-full" />
        </div>

        {/* 
          🛠️ کانتینر اصلی سلایدر با ابعاد کاملاً الاستیک و داینامیک:
          - در موبایل و تبلت با استفاده از aspect-[4/3] و aspect-[16/9] متناسب با عرض گوشی قد می‌کشد.
          - در دسکتاپ (lg) ارتفاع آن حداکثر روی 55vh (پنجاه و پنج درصد ارتفاع مانیتور) قفل می‌شود.
          - نسبت تصویر aspect-[2.1/1] در دسکتاپ تضمین می‌کند سلایدر در مانیتورهای عریض کثیف یا بیش از حد بلند نشود.
        */}
        <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[2.1/1] lg:h-[55vh] lg:min-h-[400px] lg:max-h-[520px] w-full rounded-2xl overflow-hidden shadow-2xl bg-industrialBlack border border-slate-200">
          
          {/* انیمیشن تعویض تصاویر با کمک AnimatePresence فریمور موشن */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="absolute inset-0 w-full h-full"
            >
              {/* تصویر پروژه */}
              <img 
                src={currentProject.mainImage} 
                alt={currentProject.title} 
                className="w-full h-full object-cover"
              />
              
              {/* لایه گرادینت تیره جهت تفکیک متن‌ها و کنتراست */}
              <div className="absolute inset-0 bg-gradient-to-t from-industrialBlack/90 via-industrialBlack/30 to-transparent md:bg-gradient-to-l md:from-industrialBlack/80 md:via-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* کدهای دکمه‌های کنترل کاملاً اختصاصی و راست‌چین شده */}
          <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 md:translate-y-0 md:top-auto md:bottom-6 md:left-8 md:right-auto z-30 flex justify-between md:justify-start md:gap-3 pointer-events-none">
                    
            <button 
              onClick={prevSlide}
              className="p-2.5 bg-industrialBlack/60 hover:bg-industrialGreen border border-white/10 text-white rounded-full transition-all duration-300 active:scale-95 cursor-pointer shadow-lg pointer-events-auto"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
                    
            <button 
              onClick={nextSlide}
              className="p-2.5 bg-industrialBlack/60 hover:bg-industrialGreen border border-white/10 text-white rounded-full transition-all duration-300 active:scale-95 cursor-pointer shadow-lg pointer-events-auto"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
                    
          </div>

          {/* 
            🛠️ کارت اطلاعات شیشه دودی لوکس غوطه‌ور روی تصویر:
            - پدینگ‌ها در دسکتاپ کمی تعدیل شدند (p-6 lg:p-7) تا فضای کمتری اشغال کنند.
            - در مانیتورهای کوچک دسکتاپ با استفاده از max-h-[85%] و overflow-y-auto قفل شده تا متون بیرون نزنند.
          */}
          <div className="absolute right-0 bottom-0 md:top-0 md:bottom-0 md:my-auto md:h-fit md:max-h-[90%] w-full md:w-[380px] lg:w-[420px] bg-[#0e131f]/75 border-t md:border-t-0 md:border-r-4 border-industrialGreen p-5 md:p-6 lg:p-7 text-white text-right flex flex-col space-y-3 lg:space-y-4 md:mr-6 lg:mr-8 md:rounded-xl shadow-2xl z-20 overflow-y-auto">          
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-3 lg:space-y-4"
              >
                {/* 🛠️ متوازن کردن اندازه فونت عنوان (text-base sm:text-lg lg:text-xl) */}
                <h3 className="font-estedad font-bold text-base sm:text-lg lg:text-xl text-white leading-snug">
                  {currentProject.title}
                </h3>

                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-industrialGreen" />
                  <span>{currentProject.location}</span>
                </div>

                <div className="grid grid-cols-2 gap-3 border-t border-b border-white/10 py-2.5 my-1 text-xs font-light">
                  <div className="flex items-center gap-2">
                    <LayoutGrid className="w-3.5 h-3.5 text-industrialGreen" />
                    <span>{currentProject.specifications.span}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Weight className="w-3.5 h-3.5 text-industrialGreen" />
                    <span>{currentProject.specifications.steelWeight}</span>
                  </div>
                </div>

                <Link 
                  to={`/projects/${currentProject.id}`} 
                  className="mt-1 w-full md:w-fit px-5 py-2.5 bg-industrialGreen hover:bg-industrialGreen/90 text-white font-semibold rounded-lg text-xs shadow-md transition-all duration-300 inline-flex items-center justify-center gap-2 group/btn"
                >
                  <span>مشاهده جزئیات فنی</span>
                  <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover/btn:-translate-x-1" />
                </Link>
              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </motion.div>
    </section>
  );
}
