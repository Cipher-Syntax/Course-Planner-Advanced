import React, { useEffect, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { getCourses, saveCourses } from "../utils/storage";

const TasksDetails = ({ course, taskId }) => {
    const task = course.tasks?.find((task) => task.id == taskId);
    const [uploadFile, setUploadFile] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);


    if (!task) return <p className="text-gray-500">Task not found.</p>;

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setUploadFile(file);
    };

    const handleSubmitToggle = () => {
        const courses = getCourses();
        const updatedCourses = [...courses];

        const courseIndex = updatedCourses.findIndex(c => c.code === course.code);
        if (courseIndex === -1) return;

        const taskIndex = updatedCourses[courseIndex].tasks.findIndex(t => t.id === taskId);
        if (taskIndex === -1) return;

        const newUploadedFile = isSubmitted ? null: uploadFile ? { name: uploadFile.name, type: uploadFile.type } : null;

        updatedCourses[courseIndex].tasks[taskIndex] = {
            ...updatedCourses[courseIndex].tasks[taskIndex],
            uploaded_file: newUploadedFile,
        };

        saveCourses(updatedCourses);
        setIsSubmitted(prev => !prev);
    };

    useEffect(() => {
        const data = getCourses();
        const currentCourse = data.find((c) => c.code === course.code);
        const currentTasks = currentCourse?.tasks.find((t) => t.id == taskId)

        if(currentTasks?.uploaded_file){
            setUploadFile(currentTasks.uploaded_file)
            setIsSubmitted(true)
        }

    }, [course.code, taskId])



    return (
        <div className="space-y-4">
            <div className="flex items-center gap-x-2">
                <Link to={() => window.history.back()}>
                    <div className="flex items-center gap-x-2 cursor-pointer text-green-600 hover:underline">
                        <IoIosArrowRoundBack size={24} />
                        <p>Back to tasks</p>
                    </div>
                </Link>
            </div>

            <div className='p-4 border rounded-lg shadow-sm'>
                <p className='font-bold text-xs text-gray-600'>
                    Due: {task.due_date} - {task.time}
                </p>
                <p className='text-lg font-medium'>Task: {task.title}</p>
                <p className="text-sm text-gray-700">{task.description}</p>
            </div>

            {task.criteria && task.criteria.length > 0 && (
                <div className="my-6">
                    <h3 className="font-semibold text-lg mb-2">Grading Criteria</h3>
                    <table className="w-full border border-gray-300 text-sm">
                        <thead>
                            <tr className="bg-gray-100 text-left">
                                <th className="border px-3 py-2">Criteria</th>
                                <th className="border px-3 py-2">Description</th>
                                <th className="border px-3 py-2">Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            {task.criteria.map((c, index) => (
                                <tr key={index}>
                                    <td className="border px-3 py-2">{c.criteriaName}</td>
                                    <td className="border px-3 py-2">{c.criteriaDescription}</td>
                                    <td className="border px-3 py-2">{c.score ?? "-"}</td>
                                </tr>
                            ))}
                            <tr>
                                <td className="border px-3 py-2 font-bold" colSpan={2}>Total</td>
                                <td className="border px-3 py-2 font-bold">
                                    {task.criteria.reduce((total, crit) => total + (crit.score ?? 0), 0)}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}

            <div
                onClick={() => document.getElementById("fileInput").click()}
                className="w-full h-[35px] border-2 rounded-2xl border-dashed border-gray-400 flex items-center justify-center text-gray-500 cursor-pointer"
            >
                <span>{uploadFile ? uploadFile.name : "Upload Task"}</span>
                <input
                    id="fileInput"
                    type="file"
                    accept="*"
                    onChange={handleFileChange}
                    className="hidden"
                />
            </div>

            <button
                onClick={handleSubmitToggle}
                className={`w-full h-[35px] border-2 rounded-2xl flex items-center justify-center text-white cursor-pointer transition-colors duration-200 ${
                isSubmitted ? "bg-gray-500 hover:bg-gray-600" : "bg-blue-500 hover:bg-blue-600"
                }`}
            >
                {isSubmitted ? "Unsubmit" : "Mark as Done"}
            </button>
        </div>
    );
};

export default TasksDetails;
