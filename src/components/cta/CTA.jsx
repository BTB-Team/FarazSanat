import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, PhoneCall } from 'lucide-react';

export default function CTA() {
  return (
    // سکشن اصلی با پس‌زمینه خاکستری روشن برای هماهنگی با FAQ قبلی
    <section className="w-full bg-industrialGray py-16 lg:py-20 select-none font-yekan border-t border-slate-200 relative overflow-hidden">
      
      {/* لایه محو نوری سفید در پس‌زمینه جهت افزایش بازتاب افکت شیشه */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/20 blur-[100px] rounded-full pointer-events-none" />

      {/* کانتینر اصلی مجهز به انیمیشن اسکرول فریمور موشن (فقط یک‌بار اجرا می‌شود) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: 'spring', stiffness: 50, damping: 15 }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        
        {/* 
          🛠️ اصلاحات اصلی ساختاری:
          ۱. چیدمان کاملاً یک‌ستونه و وسط‌چین (flex-col items-center text-center)
          ۲. لبه‌های مهندسی و تیزتر با کلاس rounded-xl (حذف گردی زیاد)
          ۳. افکت شیشه سبز سازمانی (bg-industrialGreen/90 backdrop-blur-md) با باردر نوری لوکس
        */}
        <div className="relative flex flex-col items-center text-center bg-industrialGreen/95 border border-white/20 rounded-xl p-8 lg:p-14 shadow-[0_20px_50px_rgba(27,82,56,0.3)] backdrop-blur-md overflow-hidden">
          
          {/* خط بازتاب نوری بسیار ظریف در لبه بالایی شیشه سبز */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          {/* 📢 بخش متون وسط‌چین با فونت استعداد ۹۰۰ و رنگ سفید درخشان */}
          <div className="flex flex-col items-center space-y-4 max-w-2xl mb-8">
            <h2 className="font-estedad font-black text-2xl sm:text-3xl md:text-4xl text-white leading-tight">
              آماده‌اید پروژه هنگرسازی خود را معیاری آغاز کنید؟
            </h2>
            <p className="text-sm md:text-base text-slate-100 leading-relaxed font-normal opacity-90">
              مهندسین فراز صنعت آماده ارائه خدمات محاسبات فنی بار سازه (با SAP2000 و ETABS)، طراحی نقشه‌های شاپ (با Tekla Structures) و برآورد هزینه‌های اولیه هستند. همین حالا با ما ارتباط برقرار کنید.
            </p>
          </div>

          {/* 🎯 دکمه اقدام غول‌پیکر با تضاد رنگی شدید سیاه صیقلی روی شیشه سبز */}
          <div className="w-full sm:w-auto">
            <Link 
              to="/contact" 
              // دکمه با رنگ سیاه صنعتی لوگو ست شده تا روی سبز بهترین کنتراست را ایجاد کند
              className="w-full sm:w-auto px-8 py-4 bg-industrialBlack hover:bg-industrialBlack/90 text-white font-bold rounded-lg shadow-xl hover:shadow-black/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 text-sm md:text-base inline-flex items-center justify-center gap-3 group cursor-pointer border border-white/10"
            >
              <PhoneCall className="w-5 h-5 text-white/80 transition-transform duration-300 group-hover:scale-110" />
              <span>ارتباط با تیم مهندسی و استعلام قیمت</span>
              <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1.5" />
            </Link>
          </div>

        </div>

      </motion.div>
    </section>
  );
}
