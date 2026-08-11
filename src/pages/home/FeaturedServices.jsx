import React from 'react';
import { motion } from 'framer-motion';
// ایمپورت آیکون‌های مورد نیاز از لوسید
import { Ruler, Cpu, HardHat } from 'lucide-react';
// 🛑 ایمپورت داینامیک داده‌های خدمات از فایل مرجع تفکیک‌شده
import { mockServices } from '@/data/mockData';

// ابزار مپینگ برای تبدیل نام متنی آیکون به کامپوننت واقعی React
const iconMap = {
  Ruler: Ruler,
  Cpu: Cpu,
  HardHat: HardHat
};

export default function FeaturedServices() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 55, damping: 14 } 
    }
  };

  return (
    <section className="w-full bg-industrialGray py-16 lg:py-24 select-none font-yekan border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* عنوان بخش خدمات */}
        <div className="text-right mb-12 md:mb-16 flex flex-col items-start">
          <h2 className="font-estedad font-black text-2xl sm:text-3xl md:text-4xl text-industrialBlack mb-3">
            پروسه کاری و خدمات تخصصی ما
          </h2>
          <div className="w-16 h-1.5 bg-industrialGreen rounded-full" />
        </div>

        {/* رندر داینامیک گرید کارت‌ها از فایل دیتای مرجع */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
        >
          {mockServices.map((service) => {
            // 🛑 لود داینامیک کامپوننت آیکون بر اساس نام ذخیره شده در دیتا
            const IconComponent = iconMap[service.iconName] || Ruler;
            
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="bg-white rounded-2xl border border-slate-250 p-6 lg:p-8 text-right flex flex-col items-start space-y-4 shadow-sm hover:shadow-xl hover:border-industrialGreen/40 hover:-translate-y-2 transition-all duration-300 group"
              >
                
                <div className="p-4 bg-industrialGray rounded-xl border border-slate-200/60 text-industrialBlack group-hover:bg-industrialGreen group-hover:text-white group-hover:border-transparent transition-all duration-300 shadow-inner">
                  <IconComponent className="w-6 h-6 md:w-7 md:h-7" />
                </div>

                <div className="flex flex-col items-start">
                  <h3 className="font-estedad font-bold text-lg md:text-xl text-industrialBlack">
                    {service.title}
                  </h3>
                  <span className="text-[10px] text-slate-400 font-light tracking-wider uppercase mt-0.5">
                    {service.subtitle}
                  </span>
                </div>

                <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal pt-2">
                  {service.description}
                </p>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
