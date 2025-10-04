import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const TasksDetails = ({ course, taskId }) => {
    const task = course.tasks?.find((task) => task.id === taskId);

    if (!task) return <p className="text-gray-500">Task not found.</p>;

    return (
        <div className="space-y-4">
            <div className="flex items-center gap-x-2">
                <Link to="">
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
        </div>
    );
};

export default TasksDetails;
