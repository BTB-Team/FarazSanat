

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PhoneCall, ArrowLeft } from "lucide-react";

import { fadeUp } from "@/utils/motion";
import { ctaData } from "../../data/services/cta";

export default function CTASection() {
  return (
    <section className="py-24">
      <div className="page-container">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-industrialGreen px-8 py-16 lg:px-20 text-center text-white"
        >

          {/* Background Blur */}

          <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-black/10 blur-3xl" />

          <div className="relative z-10">

            <span className="inline-block mb-4 rounded-full bg-white/20 px-5 py-2 text-sm">

              {ctaData.badge}

            </span>

            <h2 className="text-3xl lg:text-5xl font-bold mb-6">

              {ctaData.title}

            </h2>

            <p className="max-w-2xl mx-auto leading-8 text-white/90 mb-10">

              {ctaData.description}

            </p>

            <div className="flex flex-wrap justify-center gap-4">

              <Link
                to={ctaData.primaryButton.path}
                className="bg-white text-industrialGreen px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition"
              >
                {ctaData.primaryButton.title}
              </Link>

              <Link
                to={ctaData.secondaryButton.path}
                className="border border-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-white hover:text-industrialGreen transition"
              >
                <PhoneCall size={18} />

                {ctaData.secondaryButton.title}

                <ArrowLeft size={18} />
              </Link>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}