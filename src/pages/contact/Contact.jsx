import React from "react";
import { motion } from "framer-motion";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";
import GoogleMap from "./components/GoogleMap";

export default function Contact() {
  return (
    <div>
      {/* پس‌زمینه خط‌کشی‌شده به سبک نقشه‌های مهندسی — جایگزین عکس زمینه، هم‌راستا با برند صنعتی شرکت */}
      <section
        className="bg-industrialGray
                   bg-[linear-gradient(to_right,rgba(11,11,11,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(11,11,11,0.05)_1px,transparent_1px)]
                   bg-[size:32px_32px]"
      >
        <div className="page-container pb-44 sm:pb-52 lg:pb-40">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10 max-w-xl"
          >
            <p className="font-yekan text-sm font-semibold text-industrialGreen tracking-wide mb-2">
              فراز صنعت
            </p>
            <h1 className="font-Estedad text-3xl md:text-4xl font-extrabold text-industrialBlack">
              با ما در تماس باشید
            </h1>
            <p className="mt-3 text-base text-slate-600">
              برای مشاوره، درخواست پروژه یا هر پرسش دیگر، فرم زیر را تکمیل کنید
              یا مستقیم تماس بگیرید.
            </p>
          </motion.div>

          {/* Overlapping cards: form (light) is the anchor; info (dark) climbs onto its corner on desktop */}
          <div className="relative lg:max-w-3xl">
            <ContactForm />
            <div className="mt-6 lg:mt-0 lg:absolute lg:bottom-[-2.5rem] lg:end-[-2.5rem] lg:w-[62%]">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <div className="page-container -mt-24 sm:-mt-28 lg:mt-0 relative z-10 pb-16">
        <GoogleMap />
      </div>
    </div>
  );
}
