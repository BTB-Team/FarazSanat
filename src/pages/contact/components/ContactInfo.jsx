import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

// TODO: این اطلاعات نمونه است — با اطلاعات واقعی شرکت جایگزین شود
const CONTACT_DETAILS = [
  {
    icon: Phone,
    label: 'شماره تماس',
    value: '0799 000 000',
    dir: 'ltr',
  },
  {
    icon: Mail,
    label: 'ایمیل',
    value: 'info@farazsanat.af',
    dir: 'ltr',
  },
  {
    icon: MapPin,
    label: 'آدرس کارخانه',
    value: 'کابل، ناحیه صنعتی پل‌چرخی',
  },
];

function InfoCard({ icon: Icon, label, value, dir, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="flex items-center gap-4 bg-white rounded-2xl shadow-sm shadow-slate-900/5 border border-slate-100 p-5"
    >
      <span className="flex-shrink-0 w-12 h-12 rounded-full bg-industrialGreen text-white flex items-center justify-center">
        <Icon size={20} strokeWidth={2} />
      </span>
      <div className="min-w-0">
        <p className="text-xs text-slate-500 mb-0.5">{label}</p>
        <p dir={dir} className="text-sm font-bold text-industrialBlack truncate">{value}</p>
      </div>
    </motion.div>
  );
}

export default function ContactInfo() {
  return (
    <div className="grid sm:grid-cols-3 gap-4">
      {CONTACT_DETAILS.map((item, i) => (
        <InfoCard key={item.label} {...item} index={i} />
      ))}
    </div>
  );
}
