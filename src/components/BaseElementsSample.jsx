import React from 'react';

// این یک فایل نمونه برای راهنمایی اعضای تیم است تا استایل‌های مشترک را بشناسند
export  function BaseElementsSample() {
  return (
    <div className="page-container">
      {/* بخش عناوین مشترک */}
      <header className="border-b border-slate-200 pb-6 mb-10">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
          عناوین اصلی صفحه با فونت استعداد (H1)
        </h1>
        <p className="text-base text-slate-500 font-yekan">
          متون توضیحات، پاراگراف‌ها، و مشخصات فنی همگی با فونت ایران یکان رندر می‌شوند.
        </p>
      </header>

      {/* بخش دکمه‌های مشترک پروژه */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">۱. دکمه‌های استاندارد پروژه</h2>
        <div className="flex flex-wrap gap-4">
          <button className="btn-primary">
            دکمه اصلی (فراز صنعت)
          </button>
          
          <button className="btn-secondary">
            دکمه ثانویه (مشاهده پروژه‌ها)
          </button>
        </div>
      </section>

      {/* بخش المان‌های فرم مشترک */}
      <section className="max-w-md mb-10">
        <h2 className="text-2xl font-bold mb-4">۲. فیلدهای ورودی استاندارد فرم</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-slate-600">نام و تخلص</label>
            <input type="text" className="form-input" placeholder="انجینیر احمد مسعود" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-slate-600">شماره تماس (دری)</label>
            <input type="tel" className="form-input" placeholder="0799XXXXXX" />
          </div>
        </div>
      </section>

      {/* یادآوری پالت رنگی برای تیم در داخل کامپوننت */}
      <section>
        <h2 className="text-2xl font-bold mb-4">۳. پالت رنگی لوگو (تلویند کلس)</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-white text-center font-bold">
          <div className="p-4 bg-industrialBlack rounded-lg">
            سیاه صنعتی (bg-industrialBlack)
          </div>
          <div className="p-4 bg-industrialGreen rounded-lg">
            سبز سازمانی (bg-industrialGreen)
          </div>
          <div className="p-4 bg-industrialGray rounded-lg text-industrialBlack border border-slate-200">
            خاکستری پس‌زمینه (bg-industrialGray)
          </div>
        </div>
      </section>
    </div>
  );
}