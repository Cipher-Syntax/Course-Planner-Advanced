import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CourseData } from '../data/CourseData';

const TeacherDashboard = () => {
    const [teacherCourses, setTeacherCourses] = useState([]);
    const [teacherName, setTeacherName] = useState('');

    useEffect(() => {
        const currentTeacher = JSON.parse(localStorage.getItem('currentTeacherLoggedIn'));
        if (currentTeacher) {
            setTeacherName(currentTeacher.username);

            const storedCourses = JSON.parse(localStorage.getItem("courses")) || [];
            const filteredCourses = storedCourses.filter(
            (course) => course.teacher === currentTeacher.username
            );
            setTeacherCourses(filteredCourses);
        }
    }, []);


    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-white shadow-md p-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-800">Teacher Dashboard</h1>
                <Link to="/teacherAddSubject" className="space-x-2">
                    <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                        Add Subject
                    </button>
                    <Link to="/teacherLogin"
                        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                    >
                        Logout
                    </Link>
                </Link>
            </header>

            <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                    Welcome, {teacherName}
                </h2>

                {teacherCourses.length === 0 ? (
                    <p className="text-gray-500 text-lg">No subjects assigned yet.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {teacherCourses.map((course) => (
                            <Link to={`/teacherCourseDetails/${course.code}`} key={course.code}
                                className='cursor-pointer rounded-lg p-5 shadow-lg hover:shadow-xl transition duration-300'
                                 style={{
                                    borderLeft: `5px solid ${course.themeColor}`,
                                }}
                            >
                                <div className="flex justify-between items-center">
                                    <h3 className="text-xl font-semibold text-gray-800">{course.name}</h3>
                                    <span className='px-3 py-1 rounded-full text-white' style={{backgroundColor: `${course.themeColor}`}}>
                                        {course.code}
                                    </span>
                                </div>
                                <p className="text-gray-700 mt-2"><strong>Units:</strong> {course.units}</p>
                                <p className="text-gray-700"><strong>Schedule:</strong> {course.days.join(', ')} {course.start_time} - {course.end_time}</p>
                                <p className="text-gray-700"><strong>Semester:</strong> {course.semester}</p>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TeacherDashboard;
