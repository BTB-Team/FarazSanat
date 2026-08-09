import { motion } from 'framer-motion';
import ContactInfo from './components/ContactInfo';
import ContactForm from './components/ContactForm';
import GoogleMap from './components/GoogleMap';

export default function Contact() {
  return (
    <div className="page-container">
      {/* Hero: centered badge + heading, matching the reference's centered layout */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto text-center mb-10"
      >
        <span className="inline-block text-xs font-semibold tracking-wide text-industrialGreen border border-industrialGreen/30 bg-industrialGreen/5 rounded-full px-4 py-1.5 mb-4">
          تماس با ما
        </span>
        <h1 className="font-Estedad text-3xl md:text-4xl font-extrabold text-industrialBlack">
          با ما در تماس باشید، در خدمت شما هستیم
        </h1>
        <p className="mt-3 text-base text-slate-600">
          برای مشاوره، درخواست پروژه یا هر پرسش دیگر، فرم زیر را تکمیل کنید یا مستقیم تماس بگیرید.
        </p>
      </motion.div>

      {/* Three info cards */}
      <div className="mb-6">
        <ContactInfo />
      </div>

      {/* One unified card: map + form side by side (mirrored for RTL — map renders on the
          right, form on the left, matching the reference's reading order) */}
      <div className="bg-white rounded-2xl shadow-sm shadow-slate-900/5 border border-slate-100 p-4 sm:p-6">
        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          <GoogleMap />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
