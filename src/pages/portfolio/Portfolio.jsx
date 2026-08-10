import React from "react";
import {useState} from "react";
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";
import ProjectsHero from "@/assets/images/projects-hero.png";
import {mockProjects} from "@/data/mockData";
import {
  ArrowLeft,
  ArrowUpDown,
  Building2,
  CalendarDays,
  ChevronDown,
  Filter,
  Landmark,
  Package,
  Settings,
  Users,
  UserRound,
  Award,
  BriefcaseBusiness,
  Wheat,
} from "lucide-react";
const categories = [
  {
    id: "all",
    title: "همه پروژه‌ها",
    icon: Building2,
  },
  {
    id: "industrial",
    title: "صنعتی",
    icon: Building2,
  },
  {
    id: "commercial",
    title: "تجاری",
    icon: Landmark,
  },
  {
    id: "agricultural",
    title: "زراعتی",
    icon: Wheat,
  },
];
export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortOpen, setSortOpen] = useState(false);
  const [sortType, setSortType] = useState("newest");

  const filteredProjects =
    activeCategory === "all"
      ? mockProjects
      : mockProjects.filter((project) => project.category === activeCategory);

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortType === "oldest") {
      return Number(a.completionYear) - Number(b.completionYear);
    }

    return Number(b.completionYear) - Number(a.completionYear);
  });

  return (
    <main dir="rtl" className="bg-[#f8faf9] text-gray-900">
      {/* ================= HERO ================= */}
      <section className="relative min-h-[370px] overflow-hidden md:px-8 bg-[#101817]">
        <img
          src={ProjectsHero}
          alt="پروژه‌های شرکت صنعتی فراز"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-l from-[#07100f]/95 via-[#07100f]/70 to-[#075c3d]/70" />

        <div className="relative mx-auto flex items-center   min-h-[330px]  max-w-7xl  px-6 py-16">
          <div className="ml-auto max-w-xl  text-white ">
            <h1 className="mb-5 text-4xl font-bold text-white leading-tight md:text-5xl">
              پروژه‌های ما
            </h1>

            <p className="mb-6 text-sm leading-8 text-gray-200 md:text-base">
              نمونه‌ای از پروژه‌های موفق اجرا شده توسط شرکت صنعتی فراز در زمینه
              طراحی، ساخت و نصب سازه‌ها و تجهیزات صنعتی
            </p>

            <div className="flex items-center  gap-3 text-sm">
              <Link
                to="/"
                className="text-gray-300 transition hover:text-white"
              >
                خانه
              </Link>

              <span>‹</span>

              <span className="text-[#19a866]">پروژه‌ها</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="mx-auto max-w-7xl px-5 py-8 md:px-8">
        {/* FILTER BAR */}
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Categories */}
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:flex lg:flex-1 lg:flex-wrap">
            {categories.map((category) => {
              const Icon = category.icon;
              const active = activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-medium transition-all ${
                    active
                      ? "bg-[#168a4b] text-white shadow-sm"
                      : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-100"
                  }`}
                >
                  <Icon size={17} />

                  <span>{category.title}</span>
                </button>
              );
            })}
          </div>

          {/* Sort */}
          <div className="relative">
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-3 text-sm text-gray-700 lg:w-auto"
            >
              <Filter size={16} />

              <span>{sortType === "newest" ? "جدیدترین" : "قدیمی‌ترین"}</span>

              <ChevronDown size={16} />
            </button>

            {sortOpen && (
              <div className="absolute left-0 top-full z-20 mt-2 w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg lg:w-40">
                <button
                  onClick={() => {
                    setSortType("newest");
                    setSortOpen(false);
                  }}
                  className="block w-full px-4 py-3 text-right text-sm hover:bg-gray-50"
                >
                  جدیدترین
                </button>

                <button
                  onClick={() => {
                    setSortType("oldest");
                    setSortOpen(false);
                  }}
                  className="block w-full px-4 py-3 text-right text-sm hover:bg-gray-50"
                >
                  قدیمی‌ترین
                </button>
              </div>
            )}
          </div>
        </div>

        {/* PROJECT GRID */}
        {sortedProjects.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {sortedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="rounded-xl bg-white py-20 text-center">
            <p className="text-gray-500">پروژه‌ای در این دسته‌بندی پیدا نشد.</p>
          </div>
        )}
      </section>

      {/* ================= STATS ================= */}
      <section className="mx-auto max-w-7xl px-5 pb-6 md:px-8">
        <div className="grid grid-cols-2 overflow-hidden rounded-xl bg-white shadow-sm md:grid-cols-4">
          <Stat number="120+" title="پروژه موفق" icon={BriefcaseBusiness} />

          <Stat number="15+" title="سال تجربه" icon={Award} />

          <Stat number="45+" title="کارفرمایان راضی" icon={Users} />

          <Stat number="20+" title="مهندس متخصص" icon={UserRound} />
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="mx-auto max-w-7xl px-5 pb-8 md:px-8">
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
    </main>
  );
}

/* ================= PROJECT CARD ================= */

function ProjectCard({project}) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="group overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Image */}
      <div className="relative h-[185px] overflow-hidden">
        <img
          src={project.mainImage}
          alt={project.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Category */}
        <span className="absolute right-3 top-3 rounded-md bg-[#168a4b] px-3 py-1.5 text-xs font-medium text-white">
          {getCategoryName(project.category)}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="mb-2 line-clamp-1 text-lg font-bold text-gray-900">
          {project.title}
        </h3>

        {/* Location */}
        <div className="mb-3 flex items-center gap-1.5 text-sm text-gray-500">
          <Landmark size={15} />
          <span>{project.location}</span>
        </div>

        <p className="mb-5 line-clamp-2 text-sm leading-7 text-gray-500">
          {project.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          <div className="flex items-center gap-1.5 text-sm text-gray-500">
            <CalendarDays size={15} />
            <span>{project.completionYear}</span>
          </div>

          <p className="flex items-center gap-1 text-sm font-medium text-[#168a4b] transition hover:text-[#0d6335]">
            مشاهده جزئیات
            <ArrowLeft size={16} />
          </p>
        </div>
      </div>
    </Link>
  );
}

/* ================= STAT ================= */

function Stat({number, title, icon: Icon}) {
  return (
    <div className="flex items-center justify-center gap-4 border-b border-gray-100 p-6 last:border-b-0 md:border-b-0 md:border-l md:last:border-l-0">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#168a4b] text-white">
        <Icon size={22} />
      </div>

      <div>
        <div className="text-2xl font-bold text-[#168a4b]">{number}</div>
        <div className="mt-1 text-sm text-gray-600">{title}</div>
      </div>
    </div>
  );
}

/* ================= CATEGORY NAME ================= */

function getCategoryName(category) {
  const names = {
    "steel-structures": "سازه‌های فلزی",
    "industrial-halls": "سوله‌های صنعتی",
    "tanks-silos": "مخازن و سیلوها",
    "industrial-equipment": "تجهیزات صنعتی",
  };

  return names[category] || "پروژه";
}
