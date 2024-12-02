// components/Button.jsx
import React from "react";

const Button = ({ text, onClick, className }) => {
    return (
        <button
            onClick={onClick}
            className={`w-full py-2 px-4 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none transition-colors duration-300 ease-in-out ${className}`}
        >
            {text}
        </button>
    );
};

export default Button;
