/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function PhotoCard({ photo, align }) {
    const variants = {
        hidden: { opacity: 0, x: align === "left" ? -100 : 100 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <motion.div
            className="bg-white rounded-xl shadow-md overflow-hidden w-[320px] md:w-[400px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            variants={variants}
        >
            <img src={photo.src} alt={photo.year} className="w-full h-64 object-cover" />
            <div className="p-4">
                <p className="text-orange-600 font-semibold">{photo.year}</p>
                <p className="text-gray-600 text-sm">{photo.description}</p>
            </div>
        </motion.div>
    );
}
