/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Timeline from "./Timeline";

export default function Gallery() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="text-center mb-12">
                {/* PO + KI animacija */}
                <div className="flex justify-center items-center gap-2">
                    <motion.span
                        initial={{ opacity: 0, x: -80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="font-title text-7xl md:text-8xl text-orange-600"
                    >
                        PO
                    </motion.span>

                    <motion.span
                        initial={{ opacity: 0, x: 80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="font-title text-7xl md:text-8xl text-orange-600"
                    >
                        KI
                    </motion.span>

                </div>

                {/* PHOTO GALLERY ispod */}
                <h1 className="font-heading text-3xl md:text-4xl font-bold text-gray-800 mt-2">
                    PHOTO GALLERY
                </h1>

                {/* underline linija */}
                <span className="block w-[500px] h-[3px] bg-orange-500 mx-auto mt-4"></span>
            </div>

            <Timeline />
        </section>
    );
}
