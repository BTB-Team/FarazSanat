import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp } from "@/utils/motion";
import { Link } from "react-router-dom";

export default function ServiceCard({ service }) {
  return (
    <motion.div
      variants={fadeUp}
      className="group bg-white rounded-3xl overflow-hidden shadow-md hover:-translate-y-3
hover:shadow-2xl
transition-all
duration-500"
    >
      <div className="overflow-hidden">
        <img
          src={service.image}
          decoding="async"
          alt={service.title}
          className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      <div className="p-7">
        <h3 className="text-2xl font-bold mb-4">{service.title}</h3>

        <p className="text-slate-600 leading-8 mb-6">{service.description}</p>

        <Link
          to={`/services/${service.id}`}
          className="text-industrialGreen font-semibold flex items-center gap-2 hover:gap-3 transition-all"
        >
          مشاهده جزئیات
          <ArrowLeft size={18} />
        </Link>
      </div>
    </motion.div>
  );
}
