/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Timeline from "./Timeline";

export default function Gallery() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="text-center mb-12">
        {/* Olja & Andrija animacija */}
        <div className="flex justify-center items-baseline gap-x-6">
          <motion.span
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="font-title text-7xl md:text-8xl text-tr"
          >
            Olja
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-title text-5xl md:text-6xl text-main"
          >
            &
          </motion.span>

          <motion.span
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="font-title text-7xl md:text-8xl text-tr"
          >
            Andrija
          </motion.span>
        </div>

        {/* Ljubavna Hronologija */}
        <motion.h1
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="font-heading text-3xl md:text-4xl font-bold text-black mt-2"
        >
          Ljubavna Hronologija
        </motion.h1>

        {/* underline linija */}
        <motion.span
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="block w-[500px] h-[3px] bg-sec mx-auto mt-4"
        ></motion.span>
      </div>

      <Timeline />
      <a href="/upload.php" className="text-orange-600 font-bold underline">
        Upload new photo
      </a>

    </section>
  );
}

