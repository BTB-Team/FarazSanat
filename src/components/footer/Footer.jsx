import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-industrialBlack text-slate-400 py-8 text-center font-yekan border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm">
          © {new Date().getFullYear()} شرکت هنگرسازی فراز صنعت. تمام حقوق محفوظ است.
        </p>
      </div>
    </footer>
  );
}
