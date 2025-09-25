/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function PhotoCard({ photo, align }) {
    const variants = {
        hidden: { opacity: 0, x: align === "left" ? -120 : 120 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <motion.div
            className="bg-white rounded-xl shadow-md overflow-hidden w-[420px] md:w-[600px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            variants={variants}
        >
            <img
                src={photo.src}
                alt={photo.year}
                className="w-full h-96 object-cover" // veće slike (≈ 384px)
            />
            <div className="p-6">
                <p className="text-orange-600 font-semibold text-lg">{photo.year}</p>
                <p className="text-gray-600 font-body text-base">{photo.description}</p>
            </div>
        </motion.div>
    );
}
