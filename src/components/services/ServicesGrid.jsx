

import { motion } from "framer-motion";

import { servicesData } from "../../data/services/services";
import ServiceCard from "./ServicesCard";

import { fadeUp, staggerContainer } from "@/utils/motion";

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-industrialGray">

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

              خدمات تخصصی

            </span>

            <h2 className="text-4xl font-bold mt-3 mb-6">

              آنچه انجام می‌دهیم

            </h2>

            <p className="text-slate-600 leading-8">

              خدمات فراز صنعت از طراحی تا اجرای کامل پروژه‌های صنعتی را
              شامل می‌شود.

            </p>

          </motion.div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

            {servicesData.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
              />
            ))}

          </div>

        </motion.div>

      </div>

    </section>
  );
}