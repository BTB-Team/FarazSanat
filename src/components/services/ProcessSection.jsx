import { motion } from "framer-motion";
import {
  ClipboardList,
  Factory,
  Wrench,
} from "lucide-react";

import { processData } from "../../data/services/process";
import { fadeUp, staggerContainer } from "@/utils/motion";

const icons = [
  ClipboardList,
  Factory,
  Wrench,
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="page-container">

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Heading */}

          <motion.div
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <span className="text-industrialGreen font-semibold">
              فرآیند همکاری
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
              مسیر اجرای پروژه
            </h2>

            <p className="text-slate-600 leading-8">
              از اولین جلسه مشاوره تا تحویل نهایی پروژه، در کنار شما هستیم.
            </p>
          </motion.div>

          {/* Timeline */}

          <div className="relative">

            {/* Desktop Line */}

            <div className="hidden lg:block absolute top-8 left-0 right-0 h-1 bg-industrialGreen/20" />

            <div className="grid lg:grid-cols-3 gap-12 relative">

              {processData.map((item, index) => {

                const Icon = icons[index];

                return (

                  <motion.div
                    key={item.id}
                    variants={fadeUp}
                    className="relative text-center"
                  >

                    {/* Circle */}

                    <div className="w-16 h-16 rounded-full bg-industrialGreen text-white mx-auto flex items-center justify-center shadow-lg z-10 relative">

                      <Icon size={28} />

                    </div>

                    {/* Card */}

                    <div className="mt-8 bg-industrialGray rounded-3xl p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

                      <span className="text-industrialGreen font-bold text-sm">

                        مرحله {item.step}

                      </span>

                      <h3 className="text-2xl font-bold mt-3 mb-4">

                        {item.title}

                      </h3>

                      <p className="text-slate-600 leading-8">

                        {item.description}

                      </p>

                    </div>

                  </motion.div>

                );

              })}

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}