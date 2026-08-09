import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Award } from 'lucide-react';

export default function CoreValues() {
  const values = [
    "تعهد به کیفیت و معیارهای فنی",
    "صداقت و شفافیت در انجام امور",
    "احترام به زمان و تعهدات پروژه",
    "جلب رضایت مشتریان",
    "بهبود مستمر و نوآوری"
  ];

  const advantages = [
    "بیش از یک دهه تجربه در بخش فلزکاری و هنگرسازی",
    "تیم فنی مجرب و متخصص مهندسی",
    "استفاده از مواد اولیه با کیفیت عالی",
    "اجرای پروژه‌ها مطابق نقشه و مشخصات تخنیکی",
    "توانایی اجرای پروژه‌ها در مقیاس‌های مختلف صنعتی"
  ];

  // ساختار انیمیشن پله‌پله کانتینر مادر
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.12, delayChildren: 0.05 } 
    }
  };

  // انیمیشن ظهور هر خط ارزش از پایین به بالا با حالت الاستیک
  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 60, damping: 14 } 
    }
  };

  return (
    <section className="w-full bg-industrialGray py-16 lg:py-20 select-none font-yekan border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* سیستم گرید دو ستونه تبدیل شده به motion.div جهت فعال‌سازی اسکرول تریگر */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }} // انیمیشن فقط یک‌بار اجرا می‌شود
          className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 w-full"
        >
          
          {/* ستون اول: ارزش‌های اساسی */}
          <div className="text-right flex flex-col items-start space-y-6">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-industrialGreen" />
              <h3 className="font-estedad font-black text-2xl text-industrialBlack">ارزش‌های اساسی فابریکه</h3>
            </div>
            <ul className="space-y-4 w-full">
              {values.map((val, index) => (
                // تبدیل تگ li به motion.li جهت حرکت زنجیره‌ای پله‌پله
                <motion.li 
                  key={index} 
                  variants={itemVariants} 
                  className="flex items-center gap-3 text-sm md:text-base text-slate-600 bg-white p-3.5 rounded-lg border border-slate-200 shadow-sm hover:border-industrialGreen/30 transition-colors duration-200"
                >
                  <CheckCircle2 className="w-5 h-5 text-industrialGreen shrink-0" />
                  <span className="font-medium">{val}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* ستون دوم: توانمندی‌ها و مزایای رقابتی */}
          <div className="text-right flex flex-col items-start space-y-6">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-industrialGreen" />
              <h3 className="font-estedad font-black text-2xl text-industrialBlack">توانمندی‌ها و مزایای رقابتی</h3>
            </div>
            <ul className="space-y-4 w-full">
              {advantages.map((adv, index) => (
                <motion.li 
                  key={index} 
                  variants={itemVariants} 
                  className="flex items-center gap-3 text-sm md:text-base text-slate-600 bg-white p-3.5 rounded-lg border border-slate-200 shadow-sm hover:border-industrialGreen/30 transition-colors duration-200"
                >
                  <CheckCircle2 className="w-5 h-5 text-industrialGreen shrink-0" />
                  <span className="font-medium">{adv}</span>
                </motion.li>
              ))}
            </ul>
          </div>

        </motion.div>

        {/* بیانیه تعهد رسمی کارخانه در پایین صفحه با انیمیشن ظهور ملایم */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-14 max-w-4xl mx-auto bg-white border-r-4 border-industrialGreen rounded-xl p-6 md:p-8 text-center sm:text-right shadow-md relative overflow-hidden"
        >
          <h4 className="font-estedad font-bold text-lg text-industrialBlack mb-2">تعهد رسمی ما:</h4>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal">
            شرکت فراز صنعت خود را متعهد می‌داند تا با رعایت اصول مسلکی، کیفیت عالی و قیمت مناسب، بهترین خدمات را به مشتریان محترم خویش ارائه نموده و سهم مؤثری در رشد اقتصادی و صنعتی کشور داشته باشد.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
