

import { motion } from "framer-motion";
import {
  Users,
  ShieldCheck,
  Clock3,
  Headset,
} from "lucide-react";

import { whyChooseUsData } from "../../data/services/whyChooseUs";
import { fadeUp, staggerContainer } from "@/utils/motion";

const icons = [
  Users,
  ShieldCheck,
  Clock3,
  Headset,
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-industrialGray">
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
              چرا فراز صنعت؟
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
              مزیت‌های همکاری با ما
            </h2>

            <p className="text-slate-600 leading-8">
              کیفیت، تجربه و تعهد سه اصل اساسی در اجرای پروژه‌های ما هستند.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUsData.map((item, index) => {
              const Icon = icons[index];

              return (
                <motion.div
                  key={item.id}
                  variants={fadeUp}
                  className="group bg-white rounded-3xl p-8 text-center shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-industrialGreen/10 flex items-center justify-center mb-6 group-hover:bg-industrialGreen transition-all">
                    <Icon
                      size={30}
                      className="text-industrialGreen group-hover:text-white transition-all"
                    />
                  </div>

                  <h3 className="text-xl font-bold mb-4">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 leading-7">
                    {item.description}
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