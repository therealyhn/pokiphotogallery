/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import pig from "../assets/pig.png";

export default function PhotoCard({ photo, align, onClick }) {
    const variants = {
        hidden: { opacity: 0, x: align === "left" ? -120 : 120 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <motion.div
            className="bg-white rounded-xl shadow-xl overflow-hidden w-[420px] md:w-[550px] cursor-pointer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            variants={variants}
            onClick={onClick}
        >
            <img
                src={photo.src}
                alt={photo.year}
                className="w-full h-96 object-cover"
            />

            {/* opis box podeljen na flex */}
            <div className="flex items-center justify-between p-6 bg-gradient-to-t from-gray-50 to-white">
                {/* Tekst */}
                <div className="flex-1 pr-4">
                    <p className="text-tr font-heading font-semibold text-lg mb-1">
                        {photo.year}
                    </p>
                    <p className="font-body text-black text-base italic">
                        {photo.description}
                    </p>
                </div>

                {/* Slika */}
                <div className="w-20 h-20 flex-shrink-0">
                    <img
                        src={pig}
                        alt="decorative"
                        className="w-full h-full object-contain opacity-60"
                    />
                </div>
            </div>
        </motion.div>
    );
}
