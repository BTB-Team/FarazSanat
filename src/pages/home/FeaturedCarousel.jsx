import React, { useState } from 'react';
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
    <section className="w-full bg-industrialGray py-16 lg:py-24 select-none font-yekan border-b border-slate-200">
      
      {/* انیمیشن ورودی کل سکشن با اسکرول کاربر */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ type: 'spring', stiffness: 50, damping: 15 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        
        {/* عنوان بخش سلایدر */}
        <div className="text-right mb-10 md:mb-14">
          <h2 className="font-estedad font-black text-2xl sm:text-3xl md:text-4xl text-industrialBlack mb-3">
            پروژه‌های شاهکار و شاخص شرکت
          </h2>
          <div className="w-20 h-1.5 bg-industrialGreen rounded-full" />
        </div>

        {/* کانتینر اصلی سلایدر اختصاصی */}
        <div className="relative h-[450px] sm:h-[550px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl bg-industrialBlack border border-slate-200">
          
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
            {/* کدهای این تگ در سلایدر به صورت خودکار عکس محلی را لود می‌کنند */}
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
          {/* <div className="absolute bottom-6 right-6 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:right-auto md:left-8 z-30 flex gap-3">
            <button 
              onClick={prevSlide}
              className="p-3 bg-industrialBlack/60 hover:bg-industrialGreen border border-white/10 text-white rounded-full transition-all duration-300 active:scale-95 cursor-pointer shadow-lg"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <button 
              onClick={nextSlide}
              className="p-3 bg-industrialBlack/60 hover:bg-industrialGreen border border-white/10 text-white rounded-full transition-all duration-300 active:scale-95 cursor-pointer shadow-lg"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div> */}
          <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 md:translate-y-0 md:top-auto md:bottom-6 md:left-8 md:right-auto z-30 flex justify-between md:justify-start md:gap-3 pointer-events-none">
                    
            <button 
              onClick={prevSlide}
              // کلاس pointer-events-auto اجازه می‌دهد دکمه‌ها با وجود نامرئی بودن کانتینر مادر، کلیک‌شونده باقی بمانند
              className="p-3 bg-industrialBlack/60 hover:bg-industrialGreen border border-white/10 text-white rounded-full transition-all duration-300 active:scale-95 cursor-pointer shadow-lg pointer-events-auto"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
                    
            <button 
              onClick={nextSlide}
              className="p-3 bg-industrialBlack/60 hover:bg-industrialGreen border border-white/10 text-white rounded-full transition-all duration-300 active:scale-95 cursor-pointer shadow-lg pointer-events-auto"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
                    
          </div>

          {/* کارت اطلاعات شیشه دودی لوکس غوطه‌ور روی تصویر */}
          <div className="absolute right-0 bottom-0 md:top-0 md:bottom-0 md:my-auto md:h-fit w-full md:w-[450px] bg-industrialBlack/20 md:bg-[#0e131f]/40 backdrop-blur-md border-t md:border-t-0 md:border-r-4 border-industrialGreen p-6 md:p-8 text-white text-right flex flex-col space-y-4 md:mr-8 md:rounded-xl shadow-2xl z-20">          
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                <h3 className="font-estedad font-bold text-white text-lg sm:text-xl lg:text-2xl leading-snug">
                  {currentProject.title}
                </h3>

                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                  <MapPin className="w-4 h-4 text-industrialGreen" />
                  <span>{currentProject.location}</span>
                </div>

                <div className="grid grid-cols-2 gap-3 border-t border-b border-white/10 py-3 my-2 text-xs sm:text-sm font-light">
                  <div className="flex items-center gap-2">
                    <LayoutGrid className="w-4 h-4 text-industrialGreen" />
                    <span>{currentProject.specifications.span}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Weight className="w-4 h-4 text-industrialGreen" />
                    <span>{currentProject.specifications.steelWeight}</span>
                  </div>
                </div>

                <Link 
                  to={`/projects/${currentProject.id}`} 
                  className="mt-2 w-full md:w-fit px-5 py-2.5 bg-industrialGreen hover:bg-industrialGreen/90 text-white font-semibold rounded-lg text-xs sm:text-sm shadow-md transition-all duration-300 inline-flex items-center justify-center gap-2 group/btn"
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
