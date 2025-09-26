/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Timeline from "./Timeline";

export default function Gallery() {
  return (
    <section className="py-10 md:py-16 bg-gray-50">
      <div className="text-center mb-8 md:mb-12">
        {/* Olja & Andrija animacija */}
        <div className="flex flex-col sm:flex-row justify-center items-center sm:items-baseline gap-y-2 sm:gap-x-6">
          <motion.span
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="font-title text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-tr"
          >
            Olja
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-title text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-main"
          >
            &
          </motion.span>

          <motion.span
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="font-title text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-tr"
          >
            Andrija
          </motion.span>
        </div>

        {/* Ljubavna Hronologija */}
        <motion.h1
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="font-heading text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mt-2"
        >
          Ljubavna Hronologija
        </motion.h1>

        {/* underline linija */}
        <motion.span
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="block w-24 sm:w-40 md:w-64 lg:w-[500px] h-[3px] bg-sec mx-auto mt-3 md:mt-4"
        ></motion.span>
      </div>

      <Timeline />

      {/* Upload button */}
      <div className="flex justify-center">
        <motion.a
          href="/upload.php"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="inline-block bg-tr hover:bg-main text-white duration-500 font-medium py-2 px-4 sm:px-6 rounded-lg shadow-md mt-6 transition text-sm sm:text-base"
        >
          Ubacite Novu Sličicu
        </motion.a>
      </div>
    </section>
  );
}
