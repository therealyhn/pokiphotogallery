/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import pig from "../assets/pig.png";

export default function PhotoCard({ photo, onClick }) {
  const variants = {
    hidden: { opacity: 0, y: 120 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="bg-white rounded-xl shadow-xl overflow-hidden w-[90%] sm:w-[420px] md:w-[600px] cursor-pointer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9 }}
      variants={variants}
      onClick={onClick}
    >
      {/* Slika */}
      <div className="w-full">
        <img
          src={photo.src}
          alt={photo.year}
          loading="lazy"
          style={{ transform: "scale(0.95)" }}
          className="w-full h-64 sm:h-80 md:h-96 object-contain object-center rounded-t-xl transition-transform duration-300"
        />
      </div>

      {/* Box sa pig.png u dnu desno */}
      <div className="relative p-4 sm:p-6 bg-gradient-to-t from-gray-50 to-white overflow-hidden">
        <img
          src={pig}
          alt=""
          className="absolute bottom-2 right-2 w-12 sm:w-20 h-12 sm:h-20 object-contain opacity-50 pointer-events-none"
        />

        <div className="relative z-10">
          <p className="text-tr font-heading font-semibold text-base sm:text-lg mb-1">
            {photo.year}
          </p>
          <p className="font-body text-gray-700 text-sm sm:text-base italic">
            {photo.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

