// ۱. ایمپورت کردن تصاویر محلی از پوشه assets/images
import Hanger1 from '@/assets/images/Hero-3.jpg'; 
import Hanger2 from '@/assets/images/Hero.jpg';
// import Hanger3 from '@/assets/images/Hero-2.jpg';
import Hanger4 from '@/assets/images/hero-4.jpg';

export const mockProjects = [
  {
    id: "proj-101",
    title: "هنگر غول‌پیکر ذخیره‌سازی مجمع صنعتی لاجورد",
     category: "industrial",
     location: "شهرک صنعتی هرات",
     completionYear: "۱۴۰۴",
     mainImage: Hanger1, 
     isFeatured: true,
    specifications: {
      span: "۴۲ متر (دهانه آزاد بدون ستون وسط)",
      height: "۹.۵ متر (ارتفاع مفید ستون‌ها)",
      length: "۱۲۰ متر",
      steelWeight: "۱۶۰ تُن فولاد پیش‌ساخته",
      roofCover: "ساندویچ پنل ۵ سانتی با عایق پولی‌اوریتان",
      // 🛑 اضافه شدن نرم‌افزارهای محاسباتی به متون فنی پروژه
      steelType: "محاسبه شده با SAP2000 و ETABS / نقشه‌های شاپ Tekla Structures"
    }
   },
    {
      id: "proj-102",
      title: "سوله تولیدی و معیاری شرکت لبنیات پامیر",
      category: "industrial",
      location: "پلچرخی، کابل",
      completionYear: "۱۴۰۳",
      // 🛑 اعمال همان متد برای عکس دوم (آدرس‌دهی بر اساس موقعیت فایل mockData نسبت به تصاویر)
      mainImage: new URL(Hanger2, import.meta.url).href,
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
      mainImage: new URL(Hanger4, import.meta.url).href,
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

  // آرایه تخصصی سوالات متداول صنف هنگرسازی فراز صنعت
export const mockFaqs = [
  {
    id: 1,
    question: "آیا سازه‌های ساخته شده توسط فراز صنعت تاییدیه رسمی دارند؟",
    answer: "بلی، شرکت فراز صنعت با دارا بودن جواز رسمی نمبر D-54634 از وزارت صنعت و تجارت، تمام سازه‌های خود را کاملاً مطابق با اصول نظام مهندسی کشور و استانداردهای بین‌المللی مقاومت تعمیرات طراحی و اجرا می‌نماید."
  },
  {
    id: 2,
    question: "محاسبات بارهای محیطی (باد و برف) در سوله‌های شما چطور انجام می‌شود؟",
    answer: "تمام محاسبات فنی سازه بر اساس شرایط اقلیمی دقیق محل احداث پروژه (مانند بارهای برف سنگین زون شمال یا بادهای شدید ۱۲۰ روزه در حوزه غرب افغانستان) با نرم‌افزارهای پیشرفته مهندسی محاسباتی انجام می‌شود."
  },
  {
    id: 3,
    question: "از چه نوع فولاد و قطعاتی در ساخت هنگرها استفاده می‌کنید؟",
    answer: "ما انحصاری از فولادهای معیاری و مقاومت بالای ST37 و ST52 کارخانجات معتبر همراه با اتصالات پیچ و مهره‌ای مجهز یا جوش‌های اتوماتیک زیرپودری در محیط کارخانه استفاده می‌کنیم."
  },
  {
    id: 4,
    question: "پروسه اجرای یک پروژه از طراحی تا تحویل چقدر زمان می‌برد؟",
    answer: "زمان دقیق بستگی به ابعاد، متراژ دهانه و وزن هنگر دارد. این پروسه شامل طراحی نقشه‌های شاپ (Shop Drawings)، تولید قطعات پیش‌ساخته در کارخانه و نصب سریع در ساحه با جرثقیل‌های سنگین در کوتاه‌ترین زمان ممکن است."
  },
  {
    id: 5,
    question: "آیا شرکت فراز صنعت خدمات نصب را در تمام ولایات انجام می‌دهد؟",
    answer: "بلی، تیم مهندسی متخصص و گروه‌های نصب فنی ما قابلیت پوشش سراسری و اجرای پروژه‌های هنگرسازی و فلزکاری را در تمام ولایات و نقاط کشور دارا می‌باشند."
  }
];

// آرایه خدمات شرکت فراز صنعت
export const mockServices = [
  {
    id: 1,
    title: "طراحی و محاسبات مهندسی",
    subtitle: "Engineering & Design",
    iconName: "Ruler", // نام آیکون برای لود داینامیک
    description: "تحلیل سازه و محاسبات دقیق بارهای زنده و محیطی (برف، زلزله و بارهای دینامیک باد) با نرم‌افزارهای پیشرفته استاندارد جهانی SAP2000 و ETABS و تهیه تخصصی نقشه‌های شاپ (Shop Drawings) با Tekla Structures و AutoCAD جهت ساخت بدون نقص در کارخانه."
  },
  {
    id: 2,
    title: "تولید پیش‌ساخته قطعات",
    subtitle: "Fabrication & Manufacturing",
    iconName: "Cpu",
    description: "برش دقیق ورق‌های فولادی با دستگاه‌های پیشرفته کامپیوتری CNC و ساخت ستون‌ها، تیرها و اتصالات پیچ و مهره‌ای با سیستم جوشکاری اتوماتیک زیرپودری در محیط مجهز کارخانه با بالاترین ضریب اطمینان فنی."
  },
  {
    id: 3,
    title: "نصب و مونتاژ در ساحه",
    subtitle: "Site Installation & Erection",
    iconName: "HardHat",
    description: "انتقال منظم قطعات پیش‌ساخته به محل پروژه و مونتاژ سریع، دقیق و معیاری اسکلت فلزی هنگر توسط تیم‌های نصب مجرب با استفاده از تجهیزات و جرثقیل‌های سنگین با رعایت کامل اصول ایمنی (HSE)."
  }
];

// لست جامع و واقعی ۱۹ دستگاه استراتژیک فابریکه فراز صنعت بر پایه سند رسمی شرکت
export const mockMachinery = [
  { id: 1, title: "دستگاه قیچی کلان ۶ متره", iconName: "Scissors", description: "با ظرفیت برش ورق‌های فولادی ضخیم صنعتی طویل به ارزش مجموعی ۱۱,۴۵۰,۰۰۰ افغانی." },
  { id: 2, title: "دستگاه قیچی ۲.۵ متره هیدرولیک", iconName: "Scissors", description: "جهت برش و سایز زدن سریع ورق‌های فولادی اتصالات و پلیت‌های سازه در ضخامت‌های مختلف." },
  { id: 3, title: "دستگاه پاینچ (Punching Machine)", iconName: "Cpu", description: "دستگاه پانچ و سوراخ‌کاری صنعتی اتوماتیک جهت تعبیه دقیق محل پیچ و مهره‌ها." },
  { id: 4, title: "دستگاه پرس کلان هیدرولیکی", iconName: "Layers", description: "جهت فارم‌دهی، خم‌کاری سنگین و فرم‌دهی قطعات ضخیم فولادی تحت فشار بالا." },
  { id: 5, title: "سیستم‌های جوشکاری پیشرفته CO2", iconName: "Flame", description: "جوشکاری تحت گاز محافظ جهت اتصال فوق‌العاده مقاوم، یکدست و بدون سرباره قطعات آهن." },
  { id: 6, title: "دستگاه پلسما (Plasma Cutting)", iconName: "Zap", description: "برش حرارتی مجهز با سرعت و کیفیت بالا برای آلیاژها و ورق‌های سخت فلزی." },
  { id: 7, title: "دستگاه زیگزال صنعتی سقف", iconName: "Activity", description: "تولید تیرچه‌ها و خرپاهای زیگزال با هندسه دقیق جهت پوشش مقاوم سقف هنگرها." },
  { id: 8, title: "دستگاه‌های مجهز جوش و رکتیفایر", iconName: "Flame", description: "سیستم‌های جوشکاری برق سنگین صنعتی برای اتصالات نفوذی و پایداری کامل سازه." },
  { id: 9, title: "دستگاه برمه کلان ستونی", iconName: "Disc", description: "سوراخ‌کاری دقیق اتصالات ضخیم فلزی با مته‌های سنگین کارگاهی بدون خطا." },
  { id: 10, title: "کمپرسور هوا سنگین صنعتی", iconName: "Wind", description: "تامین هوای فشرده مورد نیاز ابزارآلات کارگاهی، دستگاه‌های برش و صالون رنگ‌آمیزی." },
  { id: 11, title: "کرین (جرثقیل) سقفی سنگین", iconName: "ArrowUpToLine", description: "جهت جابجایی تلاقی آهن‌آلات و مونتاژ قطعات غول‌پیکر پیش‌ساخته در صالون تولید." },
  { id: 12, title: "دستگاه میلگرد بر هیدرولیک", iconName: "Scissors", description: "برش سریع و معیاری میلگردها و شفت‌های فولادی مورد نیاز فونداسیون و اسکلت فلزی." },
  { id: 13, title: "لفت ترک (Forklift) سنگین کارخانه", iconName: "Truck", description: "تجهیزات چرخ‌دار جهت بارگیری، تخلیه و جابجایی دپوی ورق‌ها و تیرآهن‌ها در محوطه کارخانه." },
  { id: 14, title: "جنراتور کلان اضطراری کارخانه", iconName: "ToggleRight", description: "تامین برق صنعتی مورد نیاز ماشین‌آلات و خط تولید کارخانه در زمان پرچوی برق." },
  { id: 15, title: "دستگاه خم س (C-Profile Bending)", iconName: "Columns", description: "فرمینگ و خم‌کاری ورق‌ها جهت تولید پرلین‌ها و زی‌های C شکل پوشش دیوار و سقف." },
  { id: 16, title: "دستگاه پرس فرم‌دهی قطعات", id_ref: 16, iconName: "Layers", description: "پرس و قالب‌ریزی قطعات فلزی فرعی، کادرهای وزنه تعادل و لفت‌های ساختمانی." },
  { id: 17, title: "دستگاه برش پیشرفته CNC", iconName: "Cpu", description: "برش کامپیوتری فوق‌العاده دقیق و بدون خطای ورق‌های فولادی بر اساس نقشه‌های AutoCAD." },
  { id: 18, title: "دستگاه برمه کلان شعاعی (رادیال)", iconName: "Disc", description: "سیستم برمه بازویی پیشرفته جهت سوراخ‌کاری صفحات ضخیم بیس‌پلیت در شعاع‌های مختلف." },
  { id: 19, title: "دستگاه برش لیزر (Laser Cutting)", iconName: "Zap", description: "تکنولوژی مجهز برش لیزری آهن با بالاترین پرستیژ، ظرافت صدم‌ملی‌متری و بدون نیاز به تراش‌کاری." }
];
// داده‌های رسمی و حقوقی مدیریت و رهبری فابریکه فراز صنعت بر پایه سند رسمی وزارت
export const mockLeadership = {
  name: "سید محمد علوی",
  role: "رئیس عمومی و مالک ۱۰۰٪ اسهام فابریکه فراز صنعت",
  avatar: new URL('../assets/images/ceo-avatar.webp', import.meta.url).href, 
  message: "فابریکه هنگرسازی و فلزکاری فراز صنعت از سال ۱۳۹۲ با هدف سهم‌گیری فعال در توسعه زیربناهای صنعتی کشور و خودکفایی در بخش عمران سنگین آغاز به کار نمود. تعهد ما همواره بر این بوده است تا با تکیه بر دانش مهندسی مدرن، محاسبات دقیق تخنیکی و استفاده از ماشین‌آلات مجهز پیش‌ساخته، سازه‌هایی با بالاترین ضریب ایمنی و کیفیت عالی را به مشتریان محترم خویش تحویل دهیم. ما افق روشنِ آینده را در پارک صنعتی کوتل تخت زمین با اشتغال‌زایی وسیع برای جوانان و هموطنان عزیز و بومی‌سازی کامل این صنعت در کشور عزیز مان رقم خواهیم زد."
};

// دیتای جامع گالری تصاویر واقعی فابریکه فراز صنعت
export const mockGallery = [
  { id: "gal-1", category: "completed", title: "نمای مدرن سوله تحویل داده شده فراز صنعت", image: new URL('@/assets/images/hero-bg.jpg', import.meta.url).href },
  { id: "gal-2", category: "factory", title: "صالون مسقف و مجهز ۱,۶۰۰ متری تولید اسکلت فلزی", image: new URL('../assets/images/hero-1.jpg', import.meta.url).href },
  { id: "gal-3", category: "installation", title: "روند برپایی و نصب ستون‌های غول‌پیکر با کرین", image: new URL('../assets/images/Hero-2.jpg', import.meta.url).href }, // دقت به H بزرگ در نام فایل
  { id: "gal-4", category: "completed", title: "اجرای پوشش سقف و عایق‌بندی مجهز هنگر", image: new URL('../assets/images/Hero-3.jpg', import.meta.url).href },
  { id: "gal-5", category: "factory", title: "خط تولید و مونتاژ قطعات پیش‌ساخته در کارخانه", image: new URL('../assets/images/hero-4.jpg', import.meta.url).href },
  { id: "gal-6", category: "installation", title: "ساخت اسکلت فلزی سنگین و مهندسی‌شده", image: new URL('../assets/images/hero-5.jpg', import.meta.url).href },
  { id: "gal-7", category: "factory", title: "طراحی فضاکار داخلی سوله صنعتی", image: new URL('../assets/images/Hero.jpg', import.meta.url).href },
  { id: "gal-8", category: "completed", title: "هنگر ذخیره‌سازی استراتژیک غلات و گندم", image: new URL('../assets/images/hero-bg-2.jpg', import.meta.url).href },
  { id: "gal-9", category: "installation", title: "محاسبات فنی بارهای باد و زلزله در ساحه", image: new URL('../assets/images/hero-bg-3.jpg', import.meta.url).href },
  { id: "gal-10", category: "installation", title: "محاسبات فنی بارهای باد و زلزله در ساحه", image: new URL('../assets/images/hero-bg-1.jpg', import.meta.url).href },
  { id: "gal-11", category: "installation", title: "محاسبات فنی بارهای باد و زلزله در ساحه", image: new URL('../assets/images/hero.jpg', import.meta.url).href },
  { id: "gal-12", category: "installation", title: "محاسبات فنی بارهای باد و زلزله در ساحه", image: new URL('../assets/images/hero-bg-4.jpg', import.meta.url).href },
  { id: "gal-13", category: "installation", title: "محاسبات فنی بارهای باد و زلزله در ساحه", image: new URL('../assets/images/hero-bg-3.jpg', import.meta.url).href },
];

// دیتای کادر فنی و انجینیران ارشد فابریکه فراز صنعت
export const mockTeam = [
  {
    id: "team-1",
    name: "انجنیر احمد جاوید صدیقی",
    role: "انجنیر ارشد محاسبات و تحلیل سازه",
    specialty: "متخصص محاسبات بارهای برف و زلزله در SAP2000 و ETABS",
    image: new URL('../assets/images/ceo-avatar.webp', import.meta.url).href
  },
  {
    id: "team-2",
    name: "انجنیر محمد رفیع علوی",
    role: "مدیر فنی فابریکه و نقشه‌های شاپ",
    specialty: "متخصص مدل‌سازی اتصالات پیچ و مهره‌ای در Tekla Structures",
    image: new URL('../assets/images/ceo-avatar.webp', import.meta.url).href
  },
  {
    id: "team-3",
    name: "انجنیر ساحل رحیمی",
    role: "سرپرست کنترل کیفیت و نصب ساحه",
    specialty: "ناظر جوشکاری زیرپودری در فابریکه و مونتاژ اسکلت فلزی با کرین",
    image: new URL('../assets/images/ceo-avatar.webp', import.meta.url).href
  }
];

