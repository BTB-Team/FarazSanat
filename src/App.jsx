import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import Layout from '@/components/layout/Layout'; // ایمپورت با کاراکتر @

// لود تنبل صفحات بر اساس آدرس‌های دقیق پوشه‌بندی 
const Home = lazy(() => import('@/pages/home/Home'));
const About = lazy(() => import('@/pages/about/About'));
const Services = lazy(() => import('@/pages/services/Services'));
const Projects = lazy(() => import('@/pages/portfolio/Portfolio'));
const ProjectDetail = lazy(() => import('@/pages/portfolio/ProjectDetail'));
const MediaGallery = lazy(()=> import('@/pages/gallery/MediaGallery'));
const Contact = lazy(() => import('@/pages/contact/Contact'));
const ServiceDetail = lazy(
  () => import("@/pages/services/ServiceDetail")
);

// اتاق انتظار یا انیمیشن لودینگ صنعتی
const PageLoading = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] bg-industrialGray text-slate-600">
    <Loader2 className="w-12 h-12 animate-spin text-industrialGreen mb-4" />
    <p className="font-yekan text-base animate-pulse">در حال بارگذاری  ...</p>
  </div>
);

export default function App() {
  return (
    <Suspense fallback={<PageLoading />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} /> {/* 👈 حتماً باید داخل تگ باشد */}
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/gallery" element={<MediaGallery/>} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}
