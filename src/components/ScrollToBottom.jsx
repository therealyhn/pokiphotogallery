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
            className="fixed top-4 right-4 z-50 bg-tr hover:bg-main text-black px-6 py-2 rounded-full shadow-lg flex items-center"
        >
            Skroluj na dno
        </button>
    );
}
