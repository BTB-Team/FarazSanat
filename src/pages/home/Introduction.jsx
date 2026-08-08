import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, Calendar, Building2, Briefcase, ArrowLeft } from 'lucide-react';

export default function Introduction() {
  // تعریف انیمیشن مادر برای ستون سمت چپ (ویترین حقوقی) جهت ظهور پله‌پله
  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  // انیمیشن ظهور المان‌های داخلی از پایین به بالا با حالت کشسانی (Spring)
  const cardItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 60, damping: 14 } 
    }
  };

  return (
    <section className="w-full bg-white py-16 lg:py-24 select-none font-yekan border-b border-slate-150 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* چیدمان دو ستونه در دسکتاپ (سمت راست متن، سمت چپ شناسنامه مینی‌مال) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* 📄 ستون اول: محتوای متنی و رسمی (سمت راست - لایه‌بندی ۶ ستون از ۱۲) */}
         <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ type: 'spring', stiffness: 45, damping: 15 }}
              className="lg:col-span-7 text-right flex flex-col items-start space-y-6"
            >
              {/* نشان کوچک بالای عنوان */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-industrialGray border border-slate-200 rounded-full text-xs font-medium text-industrialGreen">
                <Building2 className="w-3.5 h-3.5" />
                <span>معرفی رسمی شرکت</span>
              </div>

              {/* 🛠️ اصلاح اصلی ۱: اضافه کردن leading-[1.4] جهت برطرف کردن تداخل خطوط عنوان */}
              <h2 className="font-estedad font-black text-2xl sm:text-3xl md:text-4xl text-industrialBlack leading-[1.4] tracking-tight">
                بیش از یک دهه تخصص رسمی <br />
                در ساخت <span className="text-industrialGreen leading-[1.4]">سازه‌های فلزی سنگین</span> کشور
              </h2>

              {/* بدنه متون تفکیک‌شده با فاصله خطوط کاملاً روان */}
              <div className="space-y-4 text-base text-slate-600 leading-relaxed font-normal">
                <p>
                  فابریکه هنگر سازی و فلزکاری <span className="font-semibold text-industrialBlack">فراز صنعت</span> دارنده جواز نمبر <span className="font-bold text-industrialGreen bg-slate-50 px-2 py-0.5 rounded border border-slate-100">D-54634</span> ریاست ثبت مرکزی وزارت صنعت و تجارت امارت اسلامی افغانستان می‌باشد که در سال <span className="font-semibold text-industrialBlack">۱۳۹۲</span> تأسیس گردیده و در بخش ساخت هنگر و لفت‌های ساختمانی فعالیت می‌نماید.
                </p>
                <p>
                  با روی کار آمدن امارت اسلامی و زمینه سازی‌ها برای رشد اقتصادی کشور و ساخت زیربناهای اساسی و توجه مبرم به ساخت فابریکات در داخل، فابریکه هنگرسازی و فلزکاری فراز صنعت در نظر دارد تا در پارک صنعتی کوتل تخت زمین اخذ نموده و با ایجاد فابریکه تخصصی ساخت هنگر و لفت‌های ساختمانی، باعث اشتغال‌زایی برای هموطنان عزیز، رشد ساخت‌وسازات داخلی و خودکفایی کشور عزیز مان گردد.
                </p>
              </div>

              {/* 🛠️ اصلاح اصلی ۲: تغییر لینک به /about و اضافه کردن w-fit جهت فیکس شدن اندازه دکمه */}
              <div className="pt-2 w-full flex justify-start">
                <Link 
                  to="/about" 
                  className="w-fit px-6 py-3 bg-transparent text-industrialGreen font-bold rounded-xl border-2 border-industrialGreen hover:bg-industrialGreen hover:text-white transition-all duration-300 text-sm inline-flex items-center gap-2 group cursor-pointer"
                >
                  <span>بیشتر بدانید</span>
                  <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                </Link>
              </div>
        </motion.div>



          {/* 🗂️ ستون دوم: ویترین شناسنامه حقوقی مینی‌مال (سمت چپ - لایه‌بندی ۵ ستون از ۱۲) */}
          <motion.div 
            variants={cardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full"
          >
            {/* باکس ۱: سال تأسیس */}
            <motion.div variants={cardItemVariants} className="p-5 bg-industrialGray rounded-xl border border-slate-200/60 text-right flex flex-col space-y-2 hover:border-industrialGreen/40 transition-colors duration-300">
              <Calendar className="w-6 h-6 text-industrialGreen" />
              <span className="font-estedad font-black text-xl text-industrialBlack mt-2">سال تأسیس ۱۳۹۲</span>
              <span className="text-xs text-slate-500 font-light">بیش از ۱۳ سال قدمت و تجربه عملی در حوزه عمران صنعتی</span>
            </motion.div>

            {/* باکس ۲: لایسنس رسمی */}
            <motion.div variants={cardItemVariants} className="p-5 bg-industrialGray rounded-xl border border-slate-200/60 text-right flex flex-col space-y-2 hover:border-industrialGreen/40 transition-colors duration-300">
              <FileText className="w-6 h-6 text-industrialGreen" />
              <span className="font-estedad font-black text-xl text-industrialBlack mt-2">جواز D-54634</span>
              <span className="text-xs text-slate-500 font-light">ثبت رسمی در وزارت محترم صنعت و تجارت کشور</span>
            </motion.div>

            {/* باکس ۳: محصولات مبرم */}
            <motion.div variants={cardItemVariants} className="p-5 bg-industrialGray rounded-xl border border-slate-200/60 text-right flex flex-col space-y-2 hover:border-industrialGreen/40 transition-colors duration-300">
              <Briefcase className="w-6 h-6 text-industrialGreen" />
              <span className="font-estedad font-black text-xl text-industrialBlack mt-2">هنگر و لفت</span>
              <span className="text-xs text-slate-500 font-light">ساخت تخصصی سوله‌های سنگین و تجهیزات لفت ساختمانی</span>
            </motion.div>

            {/* باکس ۴: چشم‌انداز توسعه */}
            <motion.div variants={cardItemVariants} className="p-5 bg-industrialGray rounded-xl border border-slate-200/60 text-right flex flex-col space-y-2 hover:border-industrialGreen/40 transition-colors duration-300">
              <Building2 className="w-6 h-6 text-industrialGreen" />
              <span className="font-estedad font-black text-xl text-industrialBlack mt-2">کوتل تخت</span>
              <span className="text-xs text-slate-500 font-light">برنامه توسعه کارخانه در پارک صنعتی و خودکفایی ملی</span>
            </motion.div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
