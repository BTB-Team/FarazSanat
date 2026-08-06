/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          // رنگ‌های رسمی استخراج‌شده از لوگوی فراز صنعت
          industrialBlack: '#0b0b0b', // سیاه صنعتی (حروف S و C و سقف)
          industrialGreen: '#1b5238', // سبز سازمانی (حرف F و چرخ‌دنده)
          industrialGray: '#f8fafc',  // خاکستری روشن (بک‌گراند صفحات)
        },
        fontFamily: {
          // تفکیک فونت عناوین و بدنه بر اساس تصمیم شما
          Estedad: ['Estedad', 'sans-serif'],       // مخصوص عناوین قدرتمند
          yekan: ['IranYekan', 'sans-serif'],   // مخصوص بدنه و متون فنی
        },
      },
    },
    plugins: [],
  }