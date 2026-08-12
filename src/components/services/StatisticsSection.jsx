

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  CalendarDays,
  Users,
  ThumbsUp,
} from "lucide-react";

import { statisticsData } from "../../data/services/statistics";
import { fadeUp, staggerContainer } from "@/utils/motion";

const icons = [
  BriefcaseBusiness,
  CalendarDays,
  Users,
  ThumbsUp,
];

export default function StatisticsSection() {
  return (
    <section className="py-24 bg-industrialBlack text-white">
      <div className="page-container">

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-industrialGreen font-semibold">
              آمار و دستاوردها
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
              اعدادی که به آن‌ها افتخار می‌کنیم
            </h2>

            <p className="text-slate-300 leading-8">
              تجربه، کیفیت و اعتماد مشتریان، سرمایه اصلی فراز صنعت است.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {statisticsData.map((item, index) => {

              const Icon = icons[index];

              return (

                <motion.div
                  key={item.id}
                  variants={fadeUp}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center hover:border-industrialGreen hover:-translate-y-2 transition-all duration-300"
                >

                  <div className="w-16 h-16 mx-auto rounded-2xl bg-industrialGreen flex items-center justify-center mb-6">

                    <Icon size={30} />

                  </div>

                  <h3 className="text-5xl font-bold text-industrialGreen mb-3">

                    {item.value}

                  </h3>

                  <p className="text-slate-300">

                    {item.title}

                  </p>

                </motion.div>

              );

            })}

          </div>

        </motion.div>

      </div>
    </section>
  );
}