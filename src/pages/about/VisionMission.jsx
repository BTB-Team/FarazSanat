
import { motion } from 'framer-motion';
import { Target, Compass } from 'lucide-react';

export default function VisionMission() {
  return (
    <section className="w-full bg-white py-16 lg:py-20 select-none font-yekan border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* چیدمان دو ستونه قرینه در دسکتاپ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          
          {/* 🎯 کادر مأموریت (تبدیل به motion.div همراه با انیمیشن اسکرول از راست و افکت هوور) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: 'spring', stiffness: 45, damping: 14 }}
            // افکت تعاملی هوور: حرکت نرم ۲ واحد به بالا، تغییر رنگ مرز و ایجاد سایه نوری عمیق
            whileHover={{ y: -6, shadow: "0 20px 40px -15px rgba(0,0,0,0.1)" }}
            className="bg-industrialGray rounded-xl border border-slate-200 p-6 lg:p-8 text-right flex flex-col items-start space-y-4 shadow-sm hover:border-slate-300 transition-all duration-300 cursor-default"
          >
            <div className="p-3 bg-white rounded-lg border border-slate-250/60 text-industrialBlack shadow-inner">
              <Target className="w-6 h-6" />
            </div>
            <div className="flex flex-col items-start">
              <h3 className="font-estedad font-black text-xl lg:text-2xl text-industrialBlack">
                مأموریت ما
              </h3>
              <span className="text-[10px] text-slate-400 font-light tracking-wider uppercase mt-0.5">
                Our Mission
              </span>
            </div>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal pt-2">
              ارائه خدمات معیاری، دوامدار و اقتصادی در بخش سازه‌های فلزی و هنگر سازی، با استفاده از نیروی متخصص، مدیریت مؤثر و رعایت اصول فنی و ایمنی، به‌منظور سهم‌گیری در توسعه زیربناهای کشور.
            </p>
          </motion.div>

          {/* 🧭 کادر چشم‌انداز (تبدیل به motion.div همراه با انیمیشن اسکرول از چپ و افکت هوور) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: 'spring', stiffness: 45, damping: 14 }}
            // افکت تعاملی هوور شیشه سبز با ایجاد سایه نوری سبز سازمانی
            whileHover={{ y: -6, shadow: "0 20px 40px -15px rgba(27,82,56,0.15)" }}
            className="bg-industrialGreen/[0.02] rounded-xl border border-industrialGreen/20 p-6 lg:p-8 text-right flex flex-col items-start space-y-4 shadow-sm hover:border-industrialGreen/30 transition-all duration-300 cursor-default"
          >
            <div className="p-3 bg-white rounded-lg border border-industrialGreen/20 text-industrialGreen shadow-inner">
              <Compass className="w-6 h-6" />
            </div>
            <div className="flex flex-col items-start">
              <h3 className="font-estedad font-black text-xl lg:text-2xl text-industrialBlack">
                چشم‌انداز ما
              </h3>
              <span className="text-[10px] text-slate-400 font-light tracking-wider uppercase mt-0.5">
                Our Vision
              </span>
            </div>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal pt-2">
              تبدیل‌شدن به یکی از شرکت‌های پیشرو و معتبر در عرصه هنگر سازی و فلزکاری در سطح افغانستان، با تمرکز بر کیفیت، نوآوری و رضایت مشتریان محترم.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
