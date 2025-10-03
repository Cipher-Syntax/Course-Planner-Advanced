import React from 'react'
import { Link } from "react-router-dom";

const TasksList = ({ course }) => {
    if (!course.tasks || course.tasks.length === 0) return <p>No tasks for this course.</p>;

    return (
        <ul>
        {course.tasks?.map((task) => (
            <li key={task.id}>
                <Link to={`?taskId=${task.id}`}>{task.title}</Link>
            </li>
        ))}
        </ul>
    );
};

export default TasksList;
