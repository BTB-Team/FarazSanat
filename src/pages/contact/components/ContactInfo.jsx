import React from 'react';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

// TODO: آدرس کامل را تایید کنید — در پیش‌نمایش قبلی به‌خاطر کلاس truncate
// بخشی از متن با «...» بریده شده بود؛ اینجا متن کامل‌تری که خوانا بود قرار گرفت.
const ADDRESS = 'کابل، ناحیه صنعتی پل‌چرخی، ناحیه ۵، سرک کمپ';
const PHONE = '0799859557';
const EMAIL = 'Abbasax19@gmail.com';

// tel: با فقط ارقام کار می‌کند — کاراکترهای غیرعددی حذف می‌شوند
const phoneHref = `tel:${PHONE.replace(/\D/g, '')}`;
// طبق خواسته شما: به‌جای mailto (که برنامه پیش‌فرض ایمیل کاربر را باز می‌کند)،
// این لینک مستقیماً صفحه compose جیمیل را در تب جدید باز می‌کند
const emailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}`;
const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

const CONTACT_DETAILS = [
  {
    icon: MapPin,
    label: 'آدرس کارخانه',
    value: ADDRESS,
    href: mapHref,
  },
  {
    icon: Mail,
    label: 'ایمیل',
    value: EMAIL,
    href: emailHref,
    dir: 'ltr',
  },
  {
    icon: Phone,
    label: 'شماره تماس',
    value: PHONE,
    href: phoneHref,
    dir: 'ltr',
  },
];

function InfoCard({ icon: Icon, label, value, href, dir, index }) {
  return (
    <motion.a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group flex items-center gap-4 bg-white rounded-2xl shadow-sm shadow-slate-900/5
                 border border-slate-100 p-5 hover:border-industrialGreen/40 hover:shadow-md
                 transition-all duration-200"
    >
      <span className="flex-shrink-0 w-12 h-12 rounded-full bg-industrialGreen text-white flex items-center justify-center">
        <Icon size={20} strokeWidth={2} />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-xs text-slate-500 mb-0.5">{label}</p>
        <p dir={dir} className="text-sm font-bold text-industrialBlack break-words">{value}</p>
      </div>
      <ExternalLink
        size={14}
        className="flex-shrink-0 text-slate-300 group-hover:text-industrialGreen transition-colors"
      />
    </motion.a>
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
