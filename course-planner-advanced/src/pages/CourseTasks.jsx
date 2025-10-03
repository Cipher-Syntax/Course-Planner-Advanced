import { useParams, useSearchParams } from "react-router-dom";
import { getCourseByCode } from "../utils/storage";
import { TasksList, TasksDetails } from "../components";

const CourseTasks = () => {
    const { code } = useParams();
    const [searchParams] = useSearchParams();
    const taskId = searchParams.get("taskId");

    const course = getCourseByCode(code);
    if (!course) return <h3>No tasks — course not found.</h3>;

    return (
        <div>
            <h3 className="mt-10 text-3xl">Tasks for {course.name}</h3>
            {taskId ? <TasksDetails course={course} taskId={taskId} /> : <TasksList course={course} />}
        </div>
    );
}

export default CourseTasks;
