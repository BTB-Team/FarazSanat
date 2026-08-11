import { Link } from 'react-router-dom';
import { ArrowLeft } from "lucide-react";

const CtaBlack = () => {
  return (
        <section className="mx-auto max-w-7xl px-5 pb-8 md:px-8" >
          <div className="relative overflow-hidden rounded-xl bg-[#101817] px-7 py-8 text-white">
            <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="mb-2 text-xl text-white font-bold md:text-2xl">
                  برای پروژه بعدی خود آماده‌اید؟
                </h2>
  
                <p className="text-sm text-gray-300">
                  با تیم متخصص ما در ارتباط باشید و مشاوره رایگان دریافت کنید.
                </p>
              </div>
  
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 rounded-lg bg-[#168a4b] px-6 py-3 text-sm font-medium transition hover:bg-[#11753f]"
                >
                  تماس با ما
                  <ArrowLeft size={17} />
                </Link>
  
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 rounded-lg border border-gray-600 px-6 py-3 text-sm font-medium transition hover:bg-white/10"
                >
                  درخواست مشاوره
                </Link>
              </div>
            </div>
          </div>
        </section>
  )
}

export default CtaBlack;
