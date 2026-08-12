

import { motion } from "framer-motion";
import { Accordion } from "flowbite-react";

import { faqData } from "../../data/services/faq";
import { fadeUp } from "@/utils/motion";

export default function FAQSection() {
  return (
    <section className="py-24 bg-white">
      <div className="page-container">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-14">

            <span className="text-industrialGreen font-semibold">
              سوالات متداول
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
              پاسخ به پرسش‌های شما
            </h2>

            <p className="text-slate-600 leading-8">
              پاسخ برخی از سوالات متداول درباره خدمات فراز صنعت.
            </p>

          </div>

          <Accordion collapseAll>

            {faqData.map((faq) => (
              <Accordion.Panel key={faq.id}>

                <Accordion.Title>

                  {faq.question}

                </Accordion.Title>

                <Accordion.Content>

                  <p className="leading-8 text-slate-600">

                    {faq.answer}

                  </p>

                </Accordion.Content>

              </Accordion.Panel>
            ))}

          </Accordion>

        </motion.div>

      </div>
    </section>
  );
}