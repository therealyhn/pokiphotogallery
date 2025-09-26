/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

export default function ScrollToBottom() {
    const [visible, setVisible] = useState(true);

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToBottom}
            className="fixed top-4 right-4 z-50 bg-main hover:bg-tr transition duration-300 text-black px-6 py-2 rounded-full shadow-lg flex items-center"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 9l-7 7-7-7"/></svg>
        </button>
    );
}
