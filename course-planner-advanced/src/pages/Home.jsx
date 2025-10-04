import React from 'react';
import { Link } from 'react-router-dom';
import { FaBookOpen, FaCalendarAlt, FaLayerGroup } from "react-icons/fa";

const Home = () => {
    return (
        <div className="py-20 sm:min-h-screen flex flex-col items-center justify-center bg-white text-balck-600 px-6">
            
            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-center">
                Course Planner Advanced
            </h1>
            
            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl mb-8 text-center max-w-2xl opacity-90">
                Organize your semester with ease. Track tasks, manage deadlines, and plan your study flow — all in one place.
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12 w-full max-w-6xl">
                <div className="bg-white text-green-600 p-6 rounded-2xl shadow-lg text-center">
                    <FaBookOpen className="mx-auto w-10 h-10 mb-3" />
                    <h3 className="font-semibold text-lg sm:text-xl text-black">Smart Course Tracking</h3>
                    <p className="text-sm sm:text-base mt-2 text-black">
                        Easily manage your subjects, units, and schedules.
                    </p>
                </div>
                <div className="bg-white text-green-600 p-6 rounded-2xl shadow-lg text-center">
                    <FaCalendarAlt className="mx-auto w-10 h-10 mb-3" />
                    <h3 className="font-semibold text-lg sm:text-xl text-black">Task & Deadline Manager</h3>
                    <p className="text-sm sm:text-base mt-2 text-black">
                        Stay ahead of assignments and projects.
                    </p>
                </div>
                <div className="bg-white text-green-600 p-6 rounded-2xl shadow-lg text-center">
                    <FaLayerGroup className="mx-auto w-10 h-10 mb-3" />
                    <h3 className="font-semibold text-lg sm:text-xl text-black">Personalized Dashboard</h3>
                    <p className="text-sm sm:text-base mt-2 text-black">
                        View everything in a clean, organized layout.
                    </p>
                </div>
            </div>
            
            {/* Button */}
            <Link
                to="/course"
                className="bg-white text-green-600 border border-green-500 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold text-base sm:text-lg shadow-md hover:scale-105 transition duration-300"
            >
                Courses
            </Link>
        </div>
    );
};

export default Home;
