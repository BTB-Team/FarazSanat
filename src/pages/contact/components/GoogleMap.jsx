import React from 'react';
import { motion } from 'framer-motion';

// TODO: این iframe بر اساس متن آدرس جستجو می‌شود (بدون نیاز به API key) —
// دقیق‌تر از قبل (که فقط «کابل» بود)، اما هنوز کاملاً دقیق نیست چون گوگل این
// آدرس متنی را حدس می‌زند، نه یک پین واقعی. برای پین ۱۰۰٪ دقیق روی محل واقعی
// کارخانه: خودتان در Google Maps محل را پیدا کنید → Share → Embed a map →
// لینک pb= را کپی کرده و جایگزین این src کنید.
const ADDRESS = 'کابل، ناحیه صنعتی پل‌چرخی، ناحیه ۵، سرک کمپ';
const MAP_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;

export default function GoogleMap() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className="rounded-xl overflow-hidden h-64 sm:h-full min-h-[280px]"
    >
      <iframe
        title="موقعیت کارخانه فراز صنعت روی نقشه"
        src={MAP_EMBED_SRC}
        width="100%"
        height="100%"
        style={{ border: 0, display: 'block' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </motion.div>
  );
}
