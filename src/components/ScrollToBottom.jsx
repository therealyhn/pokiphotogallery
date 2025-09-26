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
            className="fixed top-4 right-4 z-50 bg-tr hover:bg-main text-black px-4 py-2 rounded-full shadow-lg flex items-center"
        >
            Skroluj na dno 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7 7 7 7 7 7-7z" />
            </svg>
        </button>
    );
}
