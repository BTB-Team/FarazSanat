import { motion } from 'framer-motion';
import { Users, Briefcase } from 'lucide-react';
import { mockTeam } from '@/data/mockData';

export default function TeamSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15, delayChildren: 0.05 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 55, damping: 14 } 
    }
  };

  return (
    <section className="w-full bg-white py-16 lg:py-20 select-none font-yekan border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* عنوان بالای سکشن معرفی تیم فنی */}
        <div className="text-right mb-12 md:mb-16 flex flex-col items-start">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-industrialGray border border-slate-200 rounded-full text-xs font-medium text-industrialGreen mb-3 shadow-sm">
            <Users className="w-3.5 h-3.5" />
            <span>کادر تخصصی فابریکه</span>
          </div>
          <h2 className="font-estedad font-black text-2xl sm:text-3xl md:text-4xl text-industrialBlack mb-3">
            تیم مهندسی و انجینیران ارشد
          </h2>
          <div className="w-16 h-1.5 bg-industrialGreen rounded-full" />
        </div>

        {/* 🛑 اصلاح مهندسی اصلی: تغییر تگ‌ها به <motion.div> استاندارد بدون هیچ پیشوند اشتباه */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
        >
          {mockTeam.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              whileHover={{ y: -6, shadow: "0 20px 40px -15px rgba(0,0,0,0.08)" }}
              className="bg-industrialGray/[0.5] rounded-xl border border-slate-200/80 p-5 text-right flex flex-col items-start shadow-sm hover:bg-white hover:border-industrialGreen/20 transition-all duration-300 group cursor-default"
            >
              
              {/* قاب تصویر پرتره انجینیر */}
              <div className="w-full aspect-[4/3] rounded-lg overflow-hidden border border-slate-200 mb-5 relative bg-slate-200">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-3 right-3 p-2 bg-white/80 backdrop-blur-md rounded-lg text-industrialGreen border border-white/20">
                  <Briefcase className="w-4 h-4" />
                </div>
              </div>

              {/* نام انجینیر با فونت استعداد */}
              <h3 className="font-estedad font-bold text-base md:text-lg text-industrialBlack group-hover:text-industrialGreen transition-colors duration-200">
                {member.name}
              </h3>

              {/* عنوان سمت رسمی */}
              <span className="text-xs font-semibold text-industrialGreen mt-1 bg-industrialGreen/5 px-2 py-0.5 rounded border border-industrialGreen/10">
                {member.role}
              </span>

              {/* متن جزییات تخصص */}
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-normal pt-3 mt-2 border-t border-slate-200/60 w-full">
                {member.specialty}
              </p>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
