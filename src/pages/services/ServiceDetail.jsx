

import { Link, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { motion } from "framer-motion";

import { servicesData } from "../../data/services/services";

export default function ServiceDetail() {
  const { id } = useParams();

  const service = servicesData.find(
    (item) => item.id === Number(id)
  );

  // اگر سرویس وجود نداشت
  if (!service) {
    return (
      <section className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            سرویس پیدا نشد
          </h1>

          <p className="text-slate-600 mb-8">
            متأسفانه اطلاعات این سرویس موجود نیست.
          </p>

          <Link to="/services" className="btn-primary">
            بازگشت به خدمات
          </Link>
        </div>
      </section>
    );
  }

  return (
    <main>

      {/* Hero */}
      <section className="bg-industrialBlack text-white py-5">
        <div className="page-container">

          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition mb-8"
          >
            <ArrowRight size={18} />
            بازگشت به خدمات
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-industrialGreen font-semibold">
                خدمات فراز صنعت
              </span>

              <h1 className="text-4xl lg:text-6xl font-bold text-white mt-4 mb-6">
                {service.title}
              </h1>

              <p className="text-slate-300 text-lg leading-9">
                {service.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-3xl"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-[420px] object-cover"
              />
            </motion.div>

          </div>

        </div>
      </section>


      {/* Details */}
      <section className="py-24 bg-industrialGray">

        <div className="page-container">

          <div className="grid lg:grid-cols-3 gap-12">

            {/* Main Content */}
            <div className="lg:col-span-2 bg-white rounded-3xl p-8 lg:p-12">

              <span className="text-industrialGreen font-semibold">
                درباره این خدمت
              </span>

              <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-6">
                توضیحات کامل خدمات
              </h2>

              <p className="text-slate-600 leading-9 mb-8">
                {service.description}
                {" "}
                این خدمت با تمرکز بر کیفیت، دقت مهندسی و رعایت استانداردهای
                اجرایی ارائه می‌شود و هدف آن فراهم کردن یک راهکار مناسب برای
                نیازهای پروژه‌های صنعتی شما است.
              </p>

              <p className="text-slate-600 leading-9">
                تیم متخصص فراز صنعت در تمام مراحل پروژه، از بررسی نیازها و
                برنامه‌ریزی تا اجرا و کنترل کیفیت، در کنار شما خواهد بود.
              </p>

            </div>


            {/* Features */}
            <div className="bg-white rounded-3xl p-8 h-fit">

              <h3 className="text-2xl font-bold mb-6">
                ویژگی‌های این خدمت
              </h3>

              <div className="space-y-5">

                {[
                  "طراحی و اجرای تخصصی",
                  "استفاده از تجهیزات استاندارد",
                  "کنترل کیفیت در مراحل مختلف",
                  "رعایت اصول ایمنی",
                  "تیم متخصص و باتجربه",
                ].map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={21}
                      className="text-industrialGreen shrink-0"
                    />

                    <span className="text-slate-600">
                      {feature}
                    </span>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="py-20">

        <div className="page-container">

          <div className="bg-industrialGreen rounded-3xl p-10 lg:p-16 text-center text-white">

            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5">
              برای این خدمت به مشاوره نیاز دارید؟
            </h2>

            <p className="text-white/90 leading-8 max-w-2xl mx-auto mb-8">
              برای دریافت اطلاعات بیشتر و مشاوره تخصصی با کارشناسان فراز صنعت
              در تماس شوید.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-industrialGreen px-7 py-3 rounded-lg font-semibold hover:bg-slate-100 transition"
            >
              <Phone size={18} />
              درخواست مشاوره
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}