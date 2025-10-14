import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CourseData } from '../data/CourseData';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { IoMdAdd } from 'react-icons/io';

const TeacherCourseDetails = () => {
    const { code } = useParams();
    const course = CourseData.find((c) => c.code === code);

    if (!course) return <p className="p-6 text-gray-500">Course not found.</p>;

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="flex justify-between items-center mb-6">
                <Link to="/teacherDashboard" className="flex items-center gap-2 text-gray-700">
                    <IoIosArrowRoundBack size={28} />
                    <span>Back to Dashboard</span>
                </Link>

                <Link
                    to={`/teacherAddTasks/${course.code}`}
                    className="flex items-center justify-center gap-1 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                >
                    <IoMdAdd size={20} /> Add Task
                </Link>
            </div>

            <div
                className="rounded-xl p-6 mb-6 text-white"
                style={{ backgroundColor: course.themeColor }}
            >
                <h1 className="text-3xl font-bold">{course.name}</h1>
                <h3 className="text-xl mt-1">{course.code}</h3>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                <p className="text-gray-700 mb-2"><strong>Teacher:</strong> {course.teacher}</p>
                <p className="text-gray-700 mb-2"><strong>Units:</strong> {course.units}</p>
                <p className="text-gray-700 mb-2"><strong>Semester:</strong> {course.semester}</p>
                <p className="text-gray-700 mb-2">
                    <strong>Schedule:</strong> {course.days.join(', ')} {course.start_time} - {course.end_time}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {course.tasks.map((task) => (
                    <div key={task.id} className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold text-gray-800">{task.title}</h3>
                        <p className="text-gray-600 mt-2">{task.description}</p>
                        <p className="text-gray-500 mt-2"><strong>Due:</strong> {task.due_date} at {task.time}</p>
                        <h4 className="mt-3 font-semibold text-gray-700">Criteria:</h4>
                        <ul className="list-disc ml-6 mt-1 text-gray-600">
                            {task.criteria.map((c, idx) => (
                                <li key={idx}>
                                    <strong>{c.criteriaName}:</strong> {c.criteriaDescription} (Score: {c.score})
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeacherCourseDetails;
