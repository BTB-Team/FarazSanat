


import { motion } from "framer-motion";
import { DraftingCompass, Factory, Hammer } from "lucide-react";

import { introData } from "../../data/services/intro";
import { fadeUp, staggerContainer } from "@/utils/motion";

const icons = [DraftingCompass, Factory, Hammer];

export default function IntroSection() {
  return (
    <section className="bg-white py-20">
      <div className="page-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeUp} className="text-center max-w-3xl mx-auto">
            <span className="text-industrialGreen font-semibold">
              {introData.sectionTitle}
            </span>

            <h2 className="text-3xl lg:text-5xl font-bold mt-3 mb-6">
              {introData.title}
            </h2>

            <p className="text-slate-600 leading-8">
              {introData.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {introData.highlights.map((item, index) => {
              const Icon = icons[index];

              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="group bg-industrialGray rounded-2xl p-8 border border-transparent hover:border-industrialGreen hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-industrialGreen/10 flex items-center justify-center mb-6 group-hover:bg-industrialGreen transition-all duration-300">
                    <Icon
                      size={28}
                      className="text-industrialGreen group-hover:text-white transition-all"
                    />
                  </div>

                  <h3 className="text-xl font-bold mb-3">
                    {item}
                  </h3>

                  <p className="text-slate-600 leading-7">
                    ارائه خدمات تخصصی مطابق استانداردهای روز صنعت و نیاز پروژه.
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