import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

// TODO: این اطلاعات نمونه است — با اطلاعات واقعی شرکت جایگزین شود
const CONTACT_DETAILS = [
  {
    icon: Phone,
    label: 'تماس با ما',
    lines: ['0799 000 000', '0700 000 000'],
    dir: 'ltr',
  },
  {
    icon: Mail,
    label: 'ایمیل',
    lines: ['info@farazsanat.af'],
    dir: 'ltr',
  },
  {
    icon: MapPin,
    label: 'آدرس',
    lines: ['کابل، ناحیه صنعتی پل‌چرخی، جاده اصلی'],
  },
  {
    icon: Clock,
    label: 'ساعات کاری',
    lines: ['شنبه تا پنجشنبه: ۸ صبح تا ۴ عصر', 'جمعه: تعطیل'],
  },
];

function InfoRow({ icon: Icon, label, lines, dir }) {
  return (
    <div className="flex items-start gap-4">
      <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-industrialGreen/15 text-industrialGreen flex items-center justify-center">
        <Icon size={18} strokeWidth={2} />
      </span>
      <div>
        <p className="font-Estedad font-bold text-sm tracking-wide text-white mb-1">
          {label}
        </p>
        {lines.map((line) => (
          <p key={line} dir={dir} className="text-sm text-slate-400 leading-relaxed">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className="relative z-20 bg-industrialBlack rounded-2xl shadow-xl shadow-slate-900/20 p-8 sm:p-10
                 lg:-ms-16 lg:mt-16 space-y-7"
    >
      {CONTACT_DETAILS.map((item) => (
        <InfoRow key={item.label} {...item} />
      ))}
    </motion.div>
  );
}
