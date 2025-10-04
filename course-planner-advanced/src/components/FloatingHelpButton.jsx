import React from "react";
import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";

const FloatingHelpButton = () => {
    return (
        <Link
            to="/help"
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-green-600 hover:bg-green-700 text-white w-[50px] h-[50px] rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
        >
            <FaQuestion className="text-xl" />
        </Link>
    );
};

export default FloatingHelpButton;
