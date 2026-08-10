
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image, Eye, Plus, Minus, X } from 'lucide-react';
import { mockGallery } from '@/data/mockData';

export default function MediaGallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedImage, setSelectedImage] = useState(null);

  const tabs = [
    { id: 'all', label: 'همه تصاویر' },
    { id: 'factory', label: 'خط تولید و کارخانه' },
    { id: 'installation', label: 'روند نصب در ساحه' },
    { id: 'completed', label: 'پروژه‌های تحویل‌شده' }
  ];

  const filteredGallery = mockGallery.filter(item => 
    activeFilter === 'all' ? true : item.category === activeFilter
  );

  const displayedImages = filteredGallery.slice(0, visibleCount);

  // آرایه مدیریت استایل‌های بنتوباکس پیشرفته و نامنظم بر اساس ایندکس عکس‌ عمل
const getBentoStyle = (index) => {
    // تقسیم باقی‌مانده بر عدد ۶ باعث می‌شود هر تعداد عکسی که اضافه شود، بین شماره‌های ۰ تا ۵ قفل گردد
    const patternIndex = index % 6;
  
    switch (patternIndex) {
      case 0:
        return 'md:col-span-2 md:row-span-2 h-full'; // عکس اول و هفتم و سیزدهم و... غول‌پیکر (عریض و بلند)
      case 1:
        return 'md:col-span-1 md:row-span-1 h-full'; // عکس دوم و هشتم و چهاردهم و... مربعی کوچک
      case 2:
        return 'md:col-span-1 md:row-span-2 h-full'; // عکس سوم و نهم و پانزدهم و... عمودی کشیده
      case 3:
        return 'md:col-span-2 md:row-span-1 h-full'; // عکس چهارم و دهم و شانزدهم و... افقی عریض
      case 4:
        return 'md:col-span-1 md:row-span-1 h-full'; // عکس پنجم و یازدهم و هفدهم و... مربعی خلوت
      case 5:
        return 'md:col-span-2 md:row-span-1 h-full'; // عکس ششم و دوازدهم و هجدهم و... افقی طویل
      default:
        return 'md:col-span-1 md:row-span-1 h-full';
    }
  };
  

  return (
    <section className="w-full bg-white py-16 lg:py-24 select-none font-yekan border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* عنوان بخش گالری */}
        <div className="text-right mb-10 flex flex-col items-start">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-industrialGray border border-slate-200 rounded-full text-xs font-medium text-industrialGreen mb-3 shadow-sm">
            <Image className="w-3.5 h-3.5" />
            <span>مستندات تصویری فابریکه</span>
          </div>
          <h2 className="font-estedad font-black text-2xl sm:text-3xl md:text-4xl text-industrialBlack mb-3">
            گالری تصاویر و خط تولید واقعی
          </h2>
          <div className="w-16 h-1.5 bg-industrialGreen rounded-full" />
        </div>

        {/* منوی فیلترینگ تب‌دار */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-10 border-b border-slate-100 pb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveFilter(tab.id);
                setVisibleCount(6);
              }}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer focus:outline-none
                ${activeFilter === tab.id ? 'bg-industrialGreen text-white shadow-md' : 'bg-industrialGray text-slate-600 hover:bg-slate-200'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 🛠️ اصلاح اصلی: ایجاد گرید با ابعاد نامنظم افقی و عمودی همزمان (auto-rows-[180px] یا ۲۲۰px) */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-full auto-rows-[200px] sm:auto-rows-[220px] md:auto-rows-[180px] lg:auto-rows-[220px]"
        >
          <AnimatePresence mode="popLayout">
            {displayedImages.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.93 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.93 }}
                transition={{ type: 'spring', stiffness: 65, damping: 16 }}
                onClick={() => setSelectedImage(item)}
                // 🛠️ تزریق استایل‌های پیچیده نامنظم بنتوباکس
                className={`relative rounded-xl overflow-hidden shadow-sm group border border-slate-200 bg-industrialBlack cursor-pointer z-10 
                  ${getBentoStyle(index)}`}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-industrialBlack/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center z-10" />
                <div className="absolute inset-x-4 bottom-4 text-white text-right z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="p-1.5 bg-white/10 backdrop-blur-md rounded-lg w-fit mb-2 border border-white/10">
                    <Eye className="w-4 h-4 text-industrialGreen" />
                  </div>
                  <h4 className="font-estedad font-bold text-xs md:text-sm leading-snug">{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* دکمه دوقلوی مدیریت هوشمند لود تصاویر */}
        <div className="mt-12 flex justify-center gap-4 w-full">
          {filteredGallery.length > visibleCount ? (
            <button
              onClick={() => setVisibleCount(prev => prev + 3)}
              className="px-6 py-3 bg-white text-industrialGreen font-bold rounded-xl border-2 border-industrialGreen hover:bg-industrialGreen hover:text-white shadow-md active:scale-95 transition-all duration-300 text-sm inline-flex items-center gap-2 group cursor-pointer"
            >
              <Plus className="w-4 h-4 transition-transform duration-300 group-hover:rotate-90" />
              <span>بارگذاری تصاویر بیشتر</span>
            </button>
          ) : (
            filteredGallery.length > 6 && (
              <button
                onClick={() => setVisibleCount(6)}
                className="px-6 py-3 bg-white text-slate-500 font-bold rounded-xl border-2 border-slate-300 hover:bg-slate-500 hover:text-white hover:border-transparent shadow-md active:scale-95 transition-all duration-300 text-sm inline-flex items-center gap-2 group cursor-pointer"
              >
                <Minus className="w-4 h-4" />
                <span>نمایش کمتر تصاویر</span>
              </button>
            )
          )}
        </div>

      </div>

      {/* لایت‌باکس پاپ‌آپ تصاویر */}
        
        {/* 🔍 لایت‌باکس اختصاصی و انیمیشنی تصاویر (Pop-up Modal) */}
            <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)} // بستن پاپ‌آپ با کلیک روی فضای خالی
              // 🛠️ اصلاح طلایی اصلی: قفل کردن z-index روی بالاترین حد (z-[999]) جهت آمدن به روی کل صفحه
              className="fixed inset-0 z-[999] bg-industrialBlack/90 backdrop-blur-md flex flex-col items-center justify-center p-4 select-none font-yekan"
            >
            
              {/* دکمه بستن لایت‌باکس (Z-index داخلی بالا جهت تضمین کلیک‌شدن) */}
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 p-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full transition-colors cursor-pointer z-50"
              >
                <X className="w-5 h-5" />
              </button>
        
              {/* بدنه انیمیشنی تصویر بزرگ‌شده */}
              <motion.div
                initial={{ scale: 0.93, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.93, y: 20 }}
                transition={{ type: 'spring', damping: 22, stiffness: 85 }}
                onClick={(e) => e.stopPropagation()} // جلوگیری از بسته شدن در زمان کلیک روی خودِ عکس
                className="max-w-4xl w-full flex flex-col space-y-4 relative z-40"
              >
                {/* کادر سفید دور عکس غول‌پیکر */}
                <div className="bg-white p-2 rounded-2xl shadow-2xl border border-white/10 overflow-hidden aspect-[16/10] w-full">
                  <img 
                    src={selectedImage.image} 
                    alt={selectedImage.title} 
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                
                {/* زیرنویس فنی و شیک زیر عکس بزرگ‌شده */}
                <div className="text-right px-2">
                  <h3 className="font-estedad font-black text-base sm:text-lg lg:text-xl text-white filter drop-shadow-md">
                    {selectedImage.title}
                  </h3>
                </div>
              </motion.div>
        
            </motion.div>
          )}
        </AnimatePresence>


    </section>
  );
}
