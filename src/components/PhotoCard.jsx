/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function PhotoCard({ photo, align }) {
  const variants = {
    hidden: { opacity: 0, x: align === "left" ? -120 : 120 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-xl overflow-hidden w-[420px] md:w-[600px] transition hover:shadow-2xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.4 }}
      variants={variants}
    >
      {/* slika */}
      <img
        src={photo.src}
        alt={photo.year}
        className="w-full h-96 object-cover"
      />

      {/* box za opis */}
      <div className="p-6 bg-gradient-to-t from-gray-50 to-white">
        <p className="text-orange-600 font-heading font-semibold text-lg mb-1">
          {photo.year}
        </p>
        <p className="font-body text-gray-700 text-base leading-relaxed italic">
          {photo.description}
        </p>
      </div>
    </motion.div>
  );
}
