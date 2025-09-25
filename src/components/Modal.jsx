/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function Modal({ photo, onClose }) {
    if (!photo) return null;

    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <div className="relative w-full max-w-5xl">
                {/* Slika */}
                <motion.img
                    src={photo.src}
                    alt={photo.year}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="w-full max-h-[90vh] object-contain rounded-md"
                />

                {/* Overlay tekst */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-6">
                    <p className="text-orange-400 font-heading text-lg">{photo.year}</p>
                    <p className="font-body text-sm md:text-base">{photo.description}</p>
                </div>

                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 bg-white/80 hover:bg-white text-black px-3 py-1 rounded-full shadow-md"
                >
                    ✕
                </button>
            </div>
        </div>
    );
}
