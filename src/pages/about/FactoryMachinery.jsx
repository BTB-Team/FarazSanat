import { motion } from 'framer-motion';
// ایمپورت آیکون‌های افزوده شده از لوسید
import { 
  Layers, Factory, Cpu, Flame, Scissors, 
  Activity, ArrowUpToLine, Zap, Disc, Wind, Truck, ToggleRight, Columns 
} from 'lucide-react';
import { mockMachinery } from '@/data/mockData';

// ابزار مپینگ جامع آیکون‌ها برای لود کاملاً داینامیک
const iconMap = {
  Cpu: Cpu,
  Flame: Flame,
  Scissors: Scissors,
  Layers: Layers,
  Zap: Zap,
  Activity: Activity,
  Disc: Disc,
  Wind: Wind,
  ArrowUpToLine: ArrowUpToLine,
  Truck: Truck,
  ToggleRight: ToggleRight,
  Columns: Columns
};

export default function FactoryMachinery() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 55, damping: 14 } }
  };

  return (
    <section className="w-full bg-white py-16 lg:py-24 select-none font-yekan border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* عنوان مقتدر بخش ظرفیت سخت‌افزاری */}
        <div className="text-right mb-12 md:mb-16 flex flex-col items-start">
          <h2 className="font-estedad font-black text-2xl sm:text-3xl md:text-4xl text-industrialBlack mb-3">
            تجهیزات و ماشین‌آلات سنگین فابریکه
          </h2>
          <div className="w-16 h-1.5 bg-industrialGreen rounded-full" />
        </div>

        {/* الف) مشخصات متراژ و زیربنای ۴۰۰۰ متری فابریکه */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-5 bg-industrialGray border border-slate-200 rounded-xl flex items-center gap-5 text-right"
          >
            <div className="p-4 bg-white rounded-xl text-industrialGreen shadow-sm border border-slate-100">
              <Layers className="w-6 h-6 md:w-7 md:h-7" />
            </div>
            <div className="flex flex-col">
              <span className="font-estedad font-black text-xl lg:text-2xl text-industrialBlack">۴,۰۰۰ متر مربع</span>
              <span className="text-xs md:text-sm text-slate-500 font-light mt-0.5">مساحت کل زمین کارخانه (پارک صنعتی کوتل تخت)</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-5 bg-industrialGray border border-slate-200 rounded-xl flex items-center gap-5 text-right"
          >
            <div className="p-4 bg-white rounded-xl text-industrialGreen shadow-sm border border-slate-100">
              <Factory className="w-6 h-6 md:w-7 md:h-7" />
            </div>
            <div className="flex flex-col">
              <span className="font-estedad font-black text-xl lg:text-2xl text-industrialBlack">۱,۶۰۰ متر مربع</span>
              <span className="text-xs md:text-sm text-slate-500 font-light mt-0.5">صالون مجهز، سرپوشیده و مسقف تولید اسکلت فلزی</span>
            </div>
          </motion.div>
        </div>

        {/* 🛠️ ب) رندر داینامیک گرید ۱۹ تایی با چیدمان ۳ ستونه و انیمیشن روان اسکرول */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }} // شروع به محض دیدن ابتدای گرید
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
        >
          {mockMachinery.map((machine) => {
            const IconComponent = iconMap[machine.iconName] || Cpu;
            
            return (
              <motion.div
                key={machine.id}
                variants={itemVariants}
                whileHover={{ y: -5, shadow: "0 15px 35px -10px rgba(27,82,56,0.12)" }}
                className="bg-industrialGray/[0.4] rounded-xl border border-slate-200 p-5 text-right flex flex-col items-start space-y-4 hover:border-industrialGreen/30 hover:bg-white transition-all duration-300 group cursor-default"
              >
                {/* باکس آیکون مینی‌مال */}
                <div className="p-3 bg-white border border-slate-200 rounded-xl text-slate-500 group-hover:text-industrialGreen group-hover:border-industrialGreen/20 transition-all duration-300 shadow-sm group-hover:scale-110">
                  <IconComponent className="w-5 h-5 md:w-6 md:h-6" />
                </div>

                {/* عنوان دستگاه */}
                <h3 className="font-estedad font-bold text-sm md:text-base text-industrialBlack group-hover:text-industrialGreen transition-colors duration-250">
                  {machine.title}
                </h3>

                {/* متون توضیحات فنی با لاین‌هیت روان */}
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-normal">
                  {machine.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
