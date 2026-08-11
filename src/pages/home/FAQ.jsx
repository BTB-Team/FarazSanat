import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';
// 🛑 ایمپورت داینامیک و مسلکی داده‌های فرضی از فایل مرجع تفکیک‌شده
import { mockFaqs } from '@/data/mockData';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (id) => {
    setActiveIndex(activeIndex === id ? null : id);
  };

  return (
    <section id="faq-section" className="w-full bg-industrialGray py-16 lg:py-24 select-none font-yekan border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* عنوان بخش سوالات متداول */}
        <div className="text-right mb-10 md:mb-14 flex flex-col items-start">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-industrialGreen mb-3 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>پاسخ به سوالات شما</span>
          </div>
          <h2 className="font-estedad font-black text-2xl sm:text-3xl md:text-4xl text-industrialBlack mb-3">
            سوالات متداول کارفرمایان
          </h2>
          <div className="w-16 h-1.5 bg-industrialGreen rounded-full" />
        </div>

        {/* لیست اصلی آکاردئون‌ها لود شده از دیتای تفکیک‌شده */}
        <div className="space-y-4">
          {mockFaqs.map((faq) => {
            const isOpened = activeIndex === faq.id;
            
            return (
              <div 
                key={faq.id} 
                className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-right cursor-pointer focus:outline-none select-none"
                >
                  <span className="font-estedad font-bold text-base md:text-lg text-industrialBlack">
                    {faq.question}
                  </span>
                  
                  <motion.div
                    animate={{ rotate: isOpened ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`p-1.5 rounded-lg border ${isOpened ? 'bg-industrialGreen/10 border-industrialGreen/30 text-industrialGreen' : 'bg-slate-50 border-slate-250 text-slate-400'}`}
                  >
                    <ChevronDown className="w-4 h-4 md:w-5 md:h-5" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpened && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-6 pb-5 pt-1 text-sm md:text-base text-slate-600 leading-relaxed font-normal border-t border-slate-100 bg-slate-50/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
