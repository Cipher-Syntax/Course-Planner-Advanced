import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-green-500 text-white px-6 py-8 mt-50">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

                <div className="text-center md:text-left">
                    <h2 className="text-xl font-bold">Course-Planner-Advanced</h2>
                    <p className="text-sm mt-1">by Spectrum Lab</p>
                </div>

                <div className="flex gap-6">
                    <a href="https://github.com/Cipher-Syntax/Course-Planner-Advanced" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition">
                        <FaGithub size={20} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition">
                        <FaLinkedin size={20} />
                    </a>
                    <a href="mailto:programmerjustine@gmail.com" className="hover:text-gray-200 transition">
                        <FaEnvelope size={20} />
                    </a>
                </div>

                <p className="text-sm text-center md:text-right mt-4 md:mt-0">
                    &copy; {new Date().getFullYear()} Course-Planner-Advanced. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
