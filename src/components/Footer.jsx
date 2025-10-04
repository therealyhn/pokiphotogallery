export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 text-center py-6 mt-16 border-t border-gray-200">
      <p className="text-sm sm:text-base">
        © {new Date().getFullYear()} <span className="font-semibold text-tr">PoKi - Ljubavna Hronologija</span>. All rights reserved.
      </p>

      <p className="text-xs sm:text-sm mt-1">
        Developed by{" "}
        <a
          href="https://jovanljusic.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-tr hover:text-sec font-semibold uppercase transition-colors duration-300"
        >
          Jovan Ljusic
        </a>
      </p>
    </footer>
  );
}
