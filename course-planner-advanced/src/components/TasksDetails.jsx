import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const TasksDetails = ({ course, taskId }) => {
    const task = course.tasks?.find((task) => task.id === taskId);

    if (!task) return <p>Task not found.</p>;

    return (
        <div className="absolute">
            {/* <h4>{task.title}</h4>
            <p>{task.description}</p> */}
            <div className="mt-5">
                <Link to="" className='flex items-center gap-x-2 cursor-pointer'>
                    <IoIosArrowRoundBack size={30}></IoIosArrowRoundBack>
                    <p className='leading-relaxed tracking-wider'>Back to tasks</p>
                </Link>

                <div className='px-3 py-3'>
                    <p className='font-bold text-[12px] tracking-wide leading-relaxed'>Due: {task.due_date} - {task.time}</p>
                    <p className='text-[20px] leading-relaxed tracking-wide'>Tasks: {task.title}</p>
                    <p>{task.description}</p>
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
                                        <td className="border px-3 py-2">
                                            {c.score !== null ? c.score : "-"}
                                        </td>
                                    </tr>
                                ))}
                                <tr>
                                    <td className="border px-3 py-2 font-bold text-[20px] col-span-2" colSpan={2}>Total</td>
                                    {/* <td className="border px-3 py-2"></td> */}
                                    <td className="border px-3 py-2 text-[20px]">
                                        {
                                            task.criteria.reduce((total, crit) => {
                                                return total + (crit.score ?? 0)
                                            }, 0)
                                        }
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        
                    </div>
                )}
            </div>
        </div>
    );
};

export default TasksDetails;
