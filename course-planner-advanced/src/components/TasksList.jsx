import React from 'react'
import { Link } from "react-router-dom";

const TasksList = ({ course }) => {
    if (!course.tasks || course.tasks.length === 0) return <p>No tasks for this course.</p>;

    return (
        // <ul>
        // {course.tasks?.map((task) => (
        //     <li key={task.id}>
        //         <Link to={`?taskId=${task.id}`}>{task.title}</Link>
        //     </li>
        // ))}
        // </ul>
        <div className='absolute'>
            {
                course.tasks?.map((task) => (
                    <div key={task.id}>
                        <Link to={`?taskId=${task.id}`}>
                            <div className='px-3 py-3 border-[1px] mt-4 rounded-lg border-l-5' style={{borderLeftColor: course.themeColor}}>
                                <p className='font-bold text-[12px] tracking-wide leading-relaxed'>Due: {task.due_date} - {task.time}</p>
                                <p className='text-[20px] leading-relaxed tracking-wide'>Tasks: {task.title}</p>
                                <p>{task.description.slice(0, 70) + "..."}</p>
                            </div>
                        </Link>
                    </div>
                ))
            }
        </div>
    );
};

export default TasksList;
