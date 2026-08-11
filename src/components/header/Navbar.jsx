import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Phone, ArrowLeftRight, Menu, X } from 'lucide-react';
import FarazSanatLogo from '@/assets/logo.webp'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: 'صفحه اصلی', path: '/' },
    { title: 'خدمات ما', path: '/services' },
    { title: 'پروژه‌ها', path: '/projects' },
    { title: 'درباره کارخانه', path: '/about' },
    { title: 'گالری', path: '/gallery' },
    { title: 'سوالات متداول', path: '/?to=faq-section' }

  ];

  return (
    // تغییر بک‌گراند به سفید یکدست با سایه ظریف (shadow-sm) و خط جداکننده خاکستری
    <header  className="sticky top-0 left-0 w-full z-50 font-yekan select-none border-b border-slate-200 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 md:h-24 flex items-center justify-between">
        
        {/* ۱. بخش لوگو و نام رسمی شرکت */}
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={FarazSanatLogo} 
              alt="لوگوی شرکت فراز صنعت" 
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-500 group-hover:rotate-12"
            />
            <div className="flex flex-col border-r border-slate-200 pr-3">
              <span className="font-sahel font-black text-base md:text-xl text-industrialBlack tracking-wider">
                فراز <span className="text-industrialGreen">صنعت</span>
              </span>
              <span className="text-[9px] text-slate-500 font-light tracking-widest uppercase hidden sm:block">
                Faraz Sanat Company
              </span>
            </div>
          </Link>
        </div>

        {/* ۲. منوهای ناوبری (تغییر رنگ متون به سیاه صنعتی برای خوانایی روی سفید) */}
        <nav className="hidden lg:block">
          <ul className="flex items-center space-x-8 space-x-reverse text-sm font-medium text-slate-600">

          {menuItems.map((item, index) => {
            const isFaqLink = item.path.includes('?to=faq-section');
          
            return (
              <li key={index}>
                <NavLink 
                  to={item.path} 
                  // مدیریت کلیک در صورتی که کاربر از قبل درون خود صفحه اصلی باشد
                  onClick={(e) => {
                    if (isFaqLink && (window.location.hash === '#/' || window.location.hash.includes('?to=faq-section'))) {
                      e.preventDefault();
                      const element = document.getElementById('faq-section');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }
                  }}
                  className={({ isActive }) => `
                    relative py-2 transition-colors duration-300 block group cursor-pointer
                    ${(isActive && !isFaqLink) ? 'text-industrialGreen font-bold' : 'hover:text-industrialGreen'}
                  `}
                >
                  {item.title}
                  <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-industrialGreen transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
              </li>
            );
          })}
          </ul>
        </nav>


        {/* ۳. دکمه‌های دسکتاپ و دکمه همبرگری موبایل */}
        <div className="flex items-center gap-4">
          {/* شماره تماس دسکتاپ با رنگ متون تیره */}
          <a 
            href="tel:+93773553313" 
            className="hidden sm:flex items-center gap-2 text-slate-600 hover:text-industrialGreen transition-colors text-sm font-medium"
          >
            <div className="p-2 bg-slate-50 rounded-lg border border-slate-200">
              <Phone className="w-4 h-4 text-industrialGreen" />
            </div>
            <div className="flex flex-col items-start text-xs ">
              <span className="text-slate-400">ارتباط مستقیم:</span>
              <span className=" text-industrialBlack" dir="ltr">+۹۳۷۹۹۸۵۹۵۵۷</span>
            </div>
          </a>

          {/* دکمه اقدام اصلی کپسولی */}
          <Link 
            to="/contact" 
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-industrialGreen hover:bg-industrialGreen/90 text-white rounded-lg text-sm  shadow-md shadow-industrialGreen/10 hover:shadow-industrialGreen/30 hover:-translate-y-0.5 transition-all duration-300 group"
          >
            <span>تماس با ما</span>
            <ArrowLeftRight className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          </Link>

          {/* دکمه منوی همبرگری موبایل (تغییر رنگ به تیره) */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-industrialGreen focus:outline-none transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* 📱 ۴. منوی کشویی موبایل و تبلت با پس‌زمینه سفید لوکس */}
      <div className={`
        lg:hidden fixed top-20 left-0 w-full bg-white border-b border-slate-200 shadow-xl transition-all duration-300 ease-in-out z-40
        ${isOpen ? 'opacity-100 max-h-screen py-6' : 'opacity-0 max-h-0 overflow-hidden py-0'}
      `}>
        <div className="px-4 space-y-4 font-yekan">
          <ul className="space-y-4 text-slate-600 text-base font-medium">
            {menuItems.map((item, index) => (
              <li key={index} className="border-b border-slate-100 pb-2">
                <NavLink 
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => isActive ? 'text-industrialGreen font-bold' : 'hover:text-industrialGreen'}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
            <a href="tel:+93773553313" className="flex items-center gap-3 text-slate-600 py-2">
              <Phone className="w-5 h-5 text-industrialGreen" />
              <span className="text-sm  text-industrialBlack" dir="ltr">+۹۳۷۹۹۸۵۹۵۵۷</span>
            </a>
            <Link 
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full bg-industrialGreen text-white text-center py-3 rounded-lg text-sm block"
            >
                تماس با ما
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
