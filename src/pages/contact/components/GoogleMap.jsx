import React from 'react';
import { motion } from 'framer-motion';

// TODO: این iframe موقعیت کلی کابل را نشان می‌دهد (بدون نیاز به API key).
// وقتی آدرس دقیق کارخانه مشخص شد، برای دقت بیشتر می‌توانید از گوگل مپس
// (Share > Embed a map) لینک pb= واقعی را کپی کرده و جایگزین این src کنید.
const MAP_EMBED_SRC =
  'https://www.google.com/maps?q=Kabul,Afghanistan&output=embed';

export default function GoogleMap() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className="rounded-2xl overflow-hidden shadow-xl shadow-slate-900/5"
    >
      <iframe
        title="موقعیت کارخانه فراز صنعت روی نقشه"
        src={MAP_EMBED_SRC}
        width="100%"
        height="360"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </motion.div>
  );
}
