/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import pig from "../assets/pig.png"; // proveri putanju

export default function PhotoCard({ photo, align, onClick }) {
  const variants = {
    hidden: { opacity: 0, x: align === "left" ? -120 : 120 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className="bg-white rounded-xl shadow-xl overflow-hidden w-[420px] md:w-[600px] cursor-pointer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1 }}
      variants={variants}
      onClick={onClick}
    >
      {/* Slika u galeriji */}
      <div className="w-full aspect-[3/2]">
        <img
          src={photo.src}
          alt={photo.year}
          loading="lazy"
          className="w-full h-full object-cover object-center rounded-t-xl"
        />
      </div>

      {/* Box sa pig.png u dnu desno */}
      <div className="relative p-6 bg-gradient-to-t from-gray-50 to-white overflow-hidden">
        {/* pig.png kao watermark bottom-right */}
        <img
          src={pig}
          alt=""
          className="absolute bottom-2 right-2 w-16 h-16 object-contain opacity-30 pointer-events-none"
        />

        {/* Tekst */}
        <div className="relative z-10">
          <p className="text-main font-heading font-semibold text-lg mb-1">
            {photo.year}
          </p>
          <p className="font-body text-gray-700 text-base italic">
            {photo.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
