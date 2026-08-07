// ۱. ایمپورت کردن تصاویر محلی از پوشه assets/images
import Hanger1 from '@/assets/images/Hero-3.jpg'; // نام دقیق عکس خود را بنویسید
import Hanger2 from '@/assets/images/Hero.jpg';
import Hanger3 from '@/assets/images/Hero-2.jpg';
import Hanger4 from '@/assets/images/hero-4.jpg';

// export const mockProjects = [
//   {
//     id: "proj-101",
//     title: "هنگر غول‌پیکر ذخیره‌سازی مجمع صنعتی لاجورد",
//     category: "industrial",
//     location: "شهرک صنعتی هرات",
//     completionYear: "۱۴۰۴",
//     // ۲. جایگزین کردن متغیر عکس به جای آدرس متنی انترنت
//     mainImage: Hanger1, 
//     isFeatured: true,
//     specifications: {
//       span: "۴۲ متر (دهانه آزاد بدون ستون وسط)",
//       height: "۹.۵ متر (ارتفاع مفید ستون‌ها)",
//       length: "۱۲۰ متر",
//       steelWeight: "۱۶۰ تُن فولاد پیش‌ساخته",
//       roofCover: "ساندویچ پنل ۵ سانتی با عایق پولی‌اوریتان",
//       steelType: "فولاد معیاری ST37-2 کارخانه ذوب‌آهن"
//     },
//     description: "این پروژه به عنوان یکی از بزرگترین هنگرهای ذخیره‌سازی مجمع لاجورد طراحی شده است..."
//   },
//   {
//     id: "proj-102",
//     title: "سوله تولیدی و معیاری شرکت لبنیات پامیر",
//     category: "industrial",
//     location: "پلچرخی، کابل",
//     completionYear: "۱۴۰۳",
//     mainImage: Hanger2, // 👈 متغیر عکس دوم
//     isFeatured: true,
//     specifications: {
//       span: "۳۶ متر",
//       height: "۸ متر",
//       length: "۸۵ متر",
//       steelWeight: "۹۵ تُن فولاد",
//       roofCover: "ورق گالوانیزه رنگی همراه با پشم شیشه",
//       steelType: "ST37"
//     },
//     description: "سوله صنعتی شرکت لبنیات پامیر مطابق با آخرین استانداردهای بهداشتی..."
//   },
//   {
//     id: "proj-103",
//     title: "سالن سرپوشیده و استندینگ مجمع ورزشی آریانا",
//     category: "commercial",
//     location: "مزار شریف، بلخ",
//     completionYear: "۱۴۰۴",
//     mainImage: Hanger3, // 👈 متغیر عکس سوم
//     isFeatured: true,
//     specifications: {
//       span: "۵۰ متر (سقف قوسی بدون ستون مزاحم)",
//       height: "۱۲ متر (سقف کماندویی مجهز)",
//       length: "۶۰ متر",
//       steelWeight: "۲۱۰ تُن فولاد سنگین",
//       roofCover: "ورق دبل گالوانیزه مجهز به سیستم سقف قوسی K-Span",
//       steelType: "فولاد مقاومت بالا ST52"
//     },
//     description: "این ابر سازه با دهانه آزاد ۵۰ متری بدون هیچ ستون میانی..."
//   }
// ];
// src/data/mockData.js

export const mockProjects = [
    {
      id: "proj-101",
      title: "هنگر غول‌پیکر ذخیره‌سازی مجمع صنعتی لاجورد",
      category: "industrial",
      location: "شهرک صنعتی هرات",
      completionYear: "۱۴۰۴",
      // 🛑 اصلاح طلایی Vite: استفاده از متد نیتیو وب برای آدرس‌دهی قطعی تصاویر محلی
      mainImage: new URL('../assets/images/hero-4.jpg', import.meta.url).href, 
      isFeatured: true,
      specifications: {
        span: "۴۲ متر (دهانه آزاد بدون ستون وسط)",
        height: "۹.۵ متر (ارتفاع مفید ستون‌ها)",
        length: "۱۲۰ متر",
        steelWeight: "۱۶۰ تُن فولاد پیش‌ساخته",
        roofCover: "ساندویچ پنل ۵ سانتی با عایق پولی‌اوریتان",
        steelType: "فولاد معیاری ST37-2 کارخانه ذوب‌آهن"
      },
      description: "این پروژه به عنوان یکی از بزرگترین هنگرهای ذخیره‌سازی مجمع لاجورد طراحی شده است..."
    },
    {
      id: "proj-102",
      title: "سوله تولیدی و معیاری شرکت لبنیات پامیر",
      category: "industrial",
      location: "پلچرخی، کابل",
      completionYear: "۱۴۰۳",
      // 🛑 اعمال همان متد برای عکس دوم (آدرس‌دهی بر اساس موقعیت فایل mockData نسبت به تصاویر)
      mainImage: new URL('../assets/images/Hero.jpg', import.meta.url).href,
      isFeatured: true,
      specifications: {
        span: "۳۶ متر",
        height: "۸ متر",
        length: "۸۵ متر",
        steelWeight: "۹۵ تُن فولاد",
        roofCover: "ورق گالوانیزه رنگی همراه با پشم شیشه",
        steelType: "ST37"
      },
      description: "سوله صنعتی شرکت لبنیات پامیر مطابق با آخرین استانداردهای بهداشتی..."
    },
    {
      id: "proj-103",
      title: "سالن سرپوشیده و استندینگ مجمع ورزشی آریانا",
      category: "commercial",
      location: "مزار شریف، بلخ",
      completionYear: "۱۴۰۴",
      // 🛑 اعمال متد برای عکس سوم
      mainImage: new URL('../assets/images/Hero-3.jpg', import.meta.url).href,
      isFeatured: true,
      specifications: {
        span: "۵۰ متر (سقف قوسی بدون ستون مزاحم)",
        height: "۱۲ متر (سقف کماندویی مجهز)",
        length: "۶۰ متر",
        steelWeight: "۲۱۰ تُن فولاد سنگین",
        roofCover: "ورق دبل گالوانیزه مجهز به سیستم سقف قوسی K-Span",
        steelType: "فولاد مقاومت بالا ST52"
      },
      description: "این ابر سازه با دهانه آزاد ۵۰ متری بدون هیچ ستون میانی..."
    }
  ];
  