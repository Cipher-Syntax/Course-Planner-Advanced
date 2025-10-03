import React from "react";
import { getCourses } from "../utils/storage";
import { FaChalkboardTeacher } from "react-icons/fa";

const Teachers = () => {
    const courses = getCourses();


    const teachers = courses.reduce((acc, course) => {
        const existing = acc.find((teacher) => teacher.name === course.teacher);
        if (existing) {
            existing.courses.push(course);
        } 
        else {
            acc.push({ name: course.teacher, courses: [course] });
        }
        return acc;
    }, []);

    return (
        <div className="px-20 mt-10">

            <h1 className="text-3xl font-bold mb-6 flex items-center gap-x-2">
                <FaChalkboardTeacher size={28} className="text-green-600" />
                Teachers
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teachers.map((teacher, index) => (
                    <div
                        key={index}
                        className="shadow-xl rounded-xl border p-5 hover:shadow-2xl transition-all"
                    >
                        <h2 className="text-xl font-semibold text-green-700">{teacher.name}</h2>
                        <p className="text-sm text-gray-500 mb-3">Teaches:</p>
                        <ul className="list-disc ml-6 text-gray-700">
                            {teacher.courses.map((course) => (
                                <li key={course.code} className="mb-1">{course.code} - {course.name}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Teachers;
