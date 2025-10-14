import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserGraduate, FaChalkboardTeacher } from "react-icons/fa";

const Home = () => {
    return (
        <div className="py-20 sm:min-h-screen flex flex-col items-center justify-center bg-white text-black px-6">
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-center">
                Course Advanced Planner
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl mb-8 text-center max-w-2xl opacity-90">
                Organize your semester with ease. Track tasks, manage deadlines, and plan your study flow — all in one place.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 w-full max-w-4xl">
                <div className="bg-white text-blue-600 p-6 rounded-2xl shadow-lg text-center">
                    <FaUserGraduate className="mx-auto w-12 h-12 mb-3" />
                    <h3 className="font-semibold text-lg sm:text-xl text-black">Students</h3>
                    <p className="text-sm sm:text-base mt-2 text-black">
                        Access your courses, track assignments, and manage your study schedule.
                    </p>
                    <Link
                        to="/studentRegister"
                        className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
                    >
                        Go to Student
                    </Link>
                </div>

                <div className="bg-white text-green-600 p-6 rounded-2xl shadow-lg text-center">
                    <FaChalkboardTeacher className="mx-auto w-12 h-12 mb-3" />
                    <h3 className="font-semibold text-lg sm:text-xl text-black">Teachers</h3>
                    <p className="text-sm sm:text-base mt-2 text-black">
                        Manage your classes, track student progress, and upload materials easily.
                    </p>
                    <Link
                        to="/teacherLogin"
                        className="mt-4 inline-block bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition duration-300"
                    >
                        Go to Teacher
                    </Link>
                </div>
            </div>
            
        </div>
    );
};

export default Home;
