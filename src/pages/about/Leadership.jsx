import { motion } from 'framer-motion';
import { Quote, Award } from 'lucide-react';
import { mockLeadership } from '@/data/mockData';

export default function Leadership() {
  return (
    <section className="w-full bg-industrialGray py-16 lg:py-20 select-none font-yekan border-b border-slate-200 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          
          {/* 📢 ستون اول: پیام و متون مدیریتی و حقوقی (سمت راست) */}
          <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: 'spring', stiffness: 45, damping: 14 }}
          className="lg:col-span-7 text-right flex flex-col items-start space-y-4"
        >
          {/* نشان کوچک بالای عنوان */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-industrialGreen shadow-sm">
            <Award className="w-3.5 h-3.5" />
            <span>هدایت و رهبری فابریکه</span>
          </div>

          {/* نام، ولدیت و سمت رسمی بنیان‌گذار */}
          <div className="flex flex-col items-start">
            <h2 className="font-estedad font-black text-2xl sm:text-3xl md:text-4xl text-industrialBlack">
              {mockLeadership.name}
            </h2>
            <span className="text-sm font-semibold text-industrialGreen mt-1.5">
              {mockLeadership.role}
            </span>
          </div>

          {/* 🛠️ اصلاح مهندسی و قطعی: ایجاد یک ردیف مستقل برای آیکون نقل قول قبل از شروع متن */}
          <div className="w-full flex justify-between items-center pt-4">
            {/* آیکون به صورت کاملاً نیتیو و بدون absolute در سمت چپ کادر قرار می‌گیرد */}
            <Quote className="w-8 h-8 text-industrialGreen rotate-180 pointer-events-none" />
            <div className="flex-1 h-[1px] bg-slate-200/60 mr-4" /> {/* این خط جایگزین border-t قبلی شده است */}
          </div>

          {/* 🛠️ متن پاراگراف حالا با خیال راحت و بدون هیچ تداخلی رندر می‌شود */}
          <p className="text-sm md:text-base text-slate-600 leading-[1.8] font-normal text-justify w-full pt-1">
            {mockLeadership.message}
          </p>

        </motion.div>



          {/* 🖼 * ستون دوم: قاب عکس رسمی رئیس عمومی (سمت چپ) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: 'spring', stiffness: 45, damping: 14 }}
            className="lg:col-span-5 flex justify-center lg:justify-end w-full"
          >
            <div className="relative w-[280px] sm:w-[320px] aspect-[4/5] rounded-xl overflow-hidden shadow-2xl border-4 border-white bg-slate-250 group">
              <img 
                src={mockLeadership.avatar} 
                alt={mockLeadership.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 w-full h-2 bg-industrialGreen shadow-[0_-10px_20px_rgba(27,82,56,0.5)]" />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
