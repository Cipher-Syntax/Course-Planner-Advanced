import React from "react";

const TasksDetails = ({ course, taskId }) => {
    const task = course.tasks?.find((task) => task.id === taskId);

    if (!task) return <p>Task not found.</p>;

    return (
        <div>
            <h4>{task.title}</h4>
            <p>{task.description}</p>
        </div>
    );
};

export default TasksDetails;
