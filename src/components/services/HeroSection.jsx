
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Building2 } from "lucide-react";

import { heroData } from "../../data/services/hero";
import { fadeUp, slideLeft, staggerContainer } from "@/utils/motion";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-industrialGray">
      <div
        className="
    absolute
    inset-0
    opacity-5
    bg-[radial-gradient(circle,#1b5238_1px,transparent_1px)]
    [background-size:24px_24px]
  "
      />
      <div className="page-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]"
        >
          {/* ================= LEFT CONTENT ================= */}

          <motion.div variants={fadeUp} className="flex flex-col items-start">
            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full bg-industrialGreen/10 px-4 py-2 mb-6">
              <Building2 className="text-industrialGreen" size={18} />

              <span className="text-sm text-industrialGreen">
                {heroData.badge}
              </span>
            </div>

            {/* Title */}

            <div className="flex items-center gap-4 mb-6">
              <span className="w-2 h-16 rounded-full bg-industrialGreen" />

              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                {heroData.title}
              </h1>
            </div>

            {/* Description */}

            <p className="text-slate-600 leading-8 max-w-xl mb-10">
              {heroData.description}
            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4">
              <Link to={heroData.buttons.primary.path} className="btn-primary">
                {heroData.buttons.primary.text}
              </Link>

              <Link
                to={heroData.buttons.secondary.path}
                className="btn-secondary flex items-center gap-2"
              >
                {heroData.buttons.secondary.text}

                <ArrowLeft size={18} />
              </Link>
            </div>
          </motion.div>

          {/* ================= IMAGE ================= */}

          <motion.div
            variants={slideLeft}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Background Shape */}

            <div className="absolute -top-10 -right-10 w-72 h-72 bg-industrialGreen/10 rounded-full blur-3xl" />

            {/* Hero Image */}

            <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={heroData.image}
                
                alt={heroData.title}
                className="
        w-full
        max-w-xl
        h-[500px]
        object-cover
        transition-transform
        duration-500
        hover:scale-105
      "
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Floating Card */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.8,
                duration: 0.6,
              }}
              className="
      absolute
      bottom-8
      -left-6
      bg-white
      rounded-2xl
      shadow-xl
      px-6
      py-5
      flex
      items-center
      gap-4
      z-20
    "
            >
              <div
                className="
      w-14
      h-14
      rounded-full
      bg-industrialGreen
      flex
      items-center
      justify-center
      text-white
    "
              >
                <Building2 size={26} />
              </div>

              <div>
                <h3 className="text-2xl font-bold">{heroData.stats.value}</h3>

                <p className="text-sm text-slate-500">{heroData.stats.title}</p>

                <p className="text-xs text-slate-500 mt-1">
                  {heroData.stats.subtitle}
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={slideLeft} className="relative">
            {/* تصویر و کارت آماری را در مرحله بعد اضافه می‌کنیم */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
