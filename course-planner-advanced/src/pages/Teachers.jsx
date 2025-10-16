import React from "react";
import { getCourses } from "../utils/storage";
import { FaChalkboardTeacher } from "react-icons/fa";
import { Header } from "../components";

const Teachers = () => {
    const courses = getCourses();

    const teachers = courses.reduce((acc, course) => {
        if (!course.teacher) return acc;
        const existing = acc.find((teacher) => teacher.name === course.teacher);
        if (existing) {
            existing.courses.push(course);
        } else {
            acc.push({ name: course.teacher, courses: [course] });
        }
        return acc;
    }, []);

    return (
        <>
            {/* <Header></Header> */}
            <div className="px-20 mt-16">
                <h1 className="text-4xl font-bold mb-10 flex items-center gap-x-3">
                    <FaChalkboardTeacher size={34} className="text-green-600" />
                    Teachers
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teachers.map((teacher, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-2xl border border-gray-200 p-6 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 ease-in-out"
                        >
                            <h2 className="text-2xl font-semibold text-green-700 mb-2">
                                {teacher.name}
                            </h2>
                            <p className="text-sm text-gray-500 mb-4">Courses Taught</p>

                            <ul className="space-y-2">
                                {teacher.courses.map((course) => (
                                    <li
                                        key={course.code}
                                        className="flex flex-col bg-gray-50 border rounded-lg px-4 py-2 hover:bg-green-50 transition"
                                    >
                                        <span className="font-medium text-gray-800">{course.code}</span>
                                        <span className="text-gray-600 text-sm">{course.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Teachers;
