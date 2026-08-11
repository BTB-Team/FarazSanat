import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroHome from './HeroHome';
import FeaturedCarousel from'./FeaturedCarousel';
import Introduction from './Introduction';
import FeaturedServices from './FeaturedServices'; 
import FAQ from './FAQ';
import CTA from '@/components/cta/CTA';

export default function Home() {
  // لود لوکیشن جهت ردیابی کلیک‌ها و تغییرات آدرس‌بار
  const location = useLocation(); 

  useEffect(() => {
    // 🛠️ آنالیز هوشمند آدرس مرورگر برای استخراج پارامتر ?to=faq-section
    const searchParams = new URLSearchParams(location.search);
    const scrollToSection = searchParams.get('to');

    // شرط قاطع: اگر پارامتر برابر با faq-section بود، اسکرول را اجرا کن
    if (scrollToSection === 'faq-section') {
      const element = document.getElementById('faq-section');
      if (element) {
        // ایجاد تاخیر ۲۰۰ میلی‌ثانیه‌ای جهت بارگذاری کامل روتینگ لود تنبل و انیمیشن‌ها
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 200);
        
        return () => clearTimeout(timer);
      }
    }
  }, [location]); // به محض تغییر لوکیشن از هر صفحه‌ای، این افکت سریعاً تحریک می‌شود
  return (
    <>
      <HeroHome/>
      <FeaturedCarousel/>
      <Introduction/>
      <FeaturedServices/>
      <FAQ/>
      <CTA/>
    </>
  );
}