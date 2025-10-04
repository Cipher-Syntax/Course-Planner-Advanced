import React from 'react'
import { Link } from "react-router-dom";

const TasksList = ({ course }) => {
    if (!course.tasks || course.tasks.length === 0)
        return <p className="text-gray-500">No tasks for this course.</p>;

    return (
        <div className='space-y-4'>
            {course.tasks?.map((task) => (
                <div key={task.id}>
                    <Link to={`?taskId=${task.id}`}>
                        <div
                            className='px-4 py-3 border rounded-lg shadow-sm hover:shadow-md transition'
                            style={{ borderLeft: `5px solid ${course.themeColor}` }}
                        >
                            <p className='font-bold text-xs text-gray-600'>
                                Due: {task.due_date} - {task.time}
                            </p>
                            <p className='text-lg font-medium'>{task.title}</p>
                            <p className='text-sm text-gray-600'>
                                {task.description.slice(0, 70) + "..."}
                            </p>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default TasksList;
