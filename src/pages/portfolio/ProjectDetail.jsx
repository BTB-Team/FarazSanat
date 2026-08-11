import React from "react";
import {Link, useParams} from "react-router-dom";
import {mockProjects} from "@/data/mockData";

import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CalendarDays,
  CheckCircle2,
  Expand,
  FileText,
  Gauge,
  MapPin,
  Ruler,
  Settings,
  Weight,
} from "lucide-react";

const categoryNames = {
  industrial: "صنعتی",
  commercial: "تجاری",
  agricultural: "زراعتی",
};
export default function ProjectDetail() {
  const {id} = useParams();

  const project = mockProjects.find((item) => item.id === id);

  // اگر پروژه وجود نداشت
  if (!project) {
    return (
      <main className="min-h-screen bg-gray-50 px-5 py-20">
        <div className="mx-auto max-w-3xl rounded-2xl bg-white p-10 text-center shadow-sm">
          <h1 className="mb-4 text-2xl font-bold text-gray-900">
            پروژه پیدا نشد
          </h1>

          <p className="mb-6 text-gray-500">
            پروژه مورد نظر وجود ندارد یا حذف شده است.
          </p>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-lg bg-[#168a4b] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#11753f]"
          >
            بازگشت به پروژه‌ها
            <ArrowRight size={17} />
          </Link>
        </div>
      </main>
    );
  }

  const specifications = project.specifications || {};

  return (
    <main className="min-h-screen bg-[#f7f8f7]">
      {/* ================= BREADCRUMB ================= */}

      {/* =================================================
        TOP SECTION
        LEFT  = IMAGE
        RIGHT = PROJECT INFO + FEATURES
    ================================================== */}
      <section className="mx-auto max-w-7xl px-5 py-6 md:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* ================= RIGHT : INFO ================= */}
          <div className="flex flex-col gap-5 lg:col-span-4">
            <div className="flex items-center  gap-3 text-sm text-gray-500">
              <Link to="/" className="transition hover:text-[#168a4b]">
                خانه
              </Link>

              <span>‹</span>

              <Link to="/projects" className="transition hover:text-[#168a4b]">
                پروژه‌ها
              </Link>

              <span>‹</span>

              <span className="text-[#168a4b]">جزئیات پروژه</span>
            </div>
            {/* ---------- TITLE ---------- */}
            <div className="rounded-xl bg-transparent text-right">
              <h1 className="mb-3 text-2xl font-bold leading-9 text-gray-900 md:text-3xl">
                {project.title}
              </h1>

              <p className="text-sm leading-7 text-gray-500">
                پروژه طراحی، ساخت و اجرای سازه صنعتی توسط شرکت صنعتی فراز.
              </p>
            </div>

            {/* ---------- PROJECT INFORMATION ---------- */}
            <div className="rounded-xl border border-gray-100 bg-white shadow-sm">
              <div className="divide-y divide-gray-100">
                <InfoItem
                  icon={Building2}
                  title="نوع پروژه"
                  value={categoryNames[project.category] || "پروژه"}
                />

                <InfoItem
                  icon={MapPin}
                  title="محل پروژه"
                  value={project.location}
                />

                <InfoItem
                  icon={CalendarDays}
                  title="سال اجرا"
                  value={project.completionYear}
                />

                <InfoItem
                  icon={Ruler}
                  title="متراژ / دهانه"
                  value={specifications.span || "-"}
                />

                <InfoItem
                  icon={Weight}
                  title="وزن فولاد"
                  value={specifications.steelWeight || "-"}
                />

                <InfoItem
                  icon={Settings}
                  title="نوع فولاد"
                  value={specifications.steelType || "-"}
                />
              </div>

              {/* Status */}
              <div className="border-t border-gray-100 p-4">
                <div className="flex items-center justify-between rounded-lg bg-green-50 px-4 py-3">
                  <span className="flex items-center gap-2 text-sm font-medium text-green-700">
                    <CheckCircle2 size={17} />
                    پروژه تکمیل شده
                  </span>
                </div>
              </div>
            </div>

            {/* ---------- FEATURES ---------- */}
            <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center  gap-2">
                <CheckCircle2 size={20} className="text-[#168a4b]" />
                <h2 className="text-lg font-bold text-gray-900">
                  ویژگی‌های پروژه
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <FeatureItem text="استفاده از مصالح با کیفیت بالا" />

                <FeatureItem text="طراحی مطابق استانداردهای فنی" />

                <FeatureItem text="اجرای دقیق و معیاری" />

                <FeatureItem text="تحویل پروژه در زمان مقرر" />
              </div>
            </div>
          </div>
          {/* ================= LEFT : IMAGE ================= */}
          <div className="lg:col-span-8">
            <div className="relative overflow-hidden rounded-xl bg-white shadow-sm">
              <img
                src={project.mainImage}
                alt={project.title}
                className="h-[300px] w-full object-cover md:h-[430px] lg:h-[500px]"
              />

              {/* Project category */}
              <span className="absolute right-4 top-4 rounded-lg bg-[#168a4b] px-4 py-2 text-xs font-medium text-white">
                {categoryNames[project.category] || "پروژه"}
              </span>
            </div>
            <section className="  pb-8 pt-4">
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
                {/* ---------- ABOUT PROJECT ---------- */}
                <div className="lg:col-span-7">
                  <div className="h-full rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                    <div className="mb-6 flex items-center  gap-3 border-b border-gray-100 pb-4">
                      <FileText size={21} className="text-[#168a4b]" />
                      <h2 className="text-xl font-bold text-gray-900">
                        درباره این پروژه
                      </h2>
                    </div>

                    <p className="text-right text-sm leading-8 text-gray-600">
                      {project.description ||
                        "این پروژه توسط شرکت صنعتی فراز طراحی و اجرا شده است. اطلاعات تکمیلی پروژه بر اساس مشخصات فنی ثبت شده در سیستم ارائه می‌شود."}
                    </p>

                    {/* Services */}
                    <div className="mt-7">
                      <h3 className="mb-4 text-right font-bold text-gray-900">
                        خدمات ارائه شده
                      </h3>

                      <div className="space-y-3  ">
                        <ServiceItem text="طراحی و محاسبات مهندسی پروژه" />

                        <ServiceItem text="تولید و ساخت قطعات سازه" />

                        <ServiceItem text="اجرای عملیات نصب و مونتاژ" />

                        <ServiceItem text="کنترل کیفیت و بررسی نهایی سازه" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* ---------- TECHNICAL SPECIFICATIONS ---------- */}
                <div className="lg:col-span-5">
                  <div className="h-full rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                    <div className="mb-6 flex items-center  gap-3 border-b border-gray-100 pb-4">
                      <Settings size={21} className="text-[#168a4b]" />
                      <h2 className="text-xl font-bold text-gray-900">
                        مشخصات فنی پروژه
                      </h2>
                    </div>

                    <div className="space-y-4">
                      <TechnicalItem
                        label="دهانه"
                        value={specifications.span}
                      />

                      <TechnicalItem
                        label="ارتفاع"
                        value={specifications.height}
                      />

                      <TechnicalItem
                        label="طول"
                        value={specifications.length}
                      />

                      <TechnicalItem
                        label="وزن فولاد"
                        value={specifications.steelWeight}
                      />

                      <TechnicalItem
                        label="پوشش سقف"
                        value={specifications.roofCover}
                      />

                      <TechnicalItem
                        label="نوع فولاد"
                        value={specifications.steelType}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* =================================================
        DESCRIPTION + TECHNICAL SPECIFICATIONS
        BOTH UNDER THE IMAGE
    ================================================== */}

      {/* =================================================
        CTA
        BUTTONS ON LEFT
    ================================================== */}
      <section className="mx-auto max-w-7xl px-5 pb-10 md:px-8">
        <div className="relative overflow-hidden rounded-xl bg-[#101817] px-7 py-8 text-white">
          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            {/* Text - RIGHT */}
            <div className="text-right">
              <h2 className="mb-2 text-xl font-bold md:text-2xl text-white">
                برای اجرای پروژه بعدی خود آماده‌اید؟
              </h2>

              <p className="text-sm leading-7 text-gray-300">
                با تیم متخصص ما در ارتباط باشید و مشاوره دریافت کنید.
              </p>
            </div>

            {/* Buttons - LEFT */}
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
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ================= INFO ITEM ================= */

function InfoItem({icon: Icon, title, value}) {
  return (
    <div className="flex items-center justify-between gap-4 px-4 py-4">
      <div className="flex min-w-0 items-center gap-3">
        <Icon size={19} className="shrink-0 text-[#168a4b]" />

        <div>
          <div className="text-xs text-gray-500">{title}</div>

          <div className="mt-1 text-sm font-medium text-gray-900">
            {value || "-"}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= TECHNICAL ITEM ================= */

function TechnicalItem({label, value}) {
  return (
    <div className="flex items-start justify-between gap-5 border-b border-gray-100 pb-3 last:border-0">
      <span className="text-sm text-gray-500">{label}</span>

      <span className="max-w-[65%] text-right text-sm font-medium leading-6 text-gray-800">
        {value || "-"}
      </span>
    </div>
  );
}

/* ================= SERVICE ITEM ================= */

// function ServiceItem({text}) {
//   return (
//     <div className="flex items-center justify-end gap-3 text-sm text-gray-600">
//       <span>{text}</span>

//       <CheckCircle2 size={17} className="shrink-0 text-[#168a4b]" />
//     </div>
//   );
// }
function ServiceItem({text}) {
  return (
    <div className="flex items-center  gap-3 text-sm text-gray-600">
      <CheckCircle2 size={17} className="shrink-0 text-[#168a4b]" />
      <span>{text}</span>
    </div>
  );
}

/* ================= FEATURE ITEM ================= */

function FeatureItem({text}) {
  return (
    <div className="flex items-center justify-start gap-2 rounded-lg bg-gray-50 px-3 py-3">
      <CheckCircle2 size={16} className="shrink-0 text-[#168a4b]" />
      <span className="text-right text-xs leading-5 text-gray-700">{text}</span>
    </div>
  );
}
