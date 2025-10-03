import React from 'react'
import { Outlet, useParams, Link } from 'react-router-dom'
import { getCourseByCode } from '../utils/storage';

const CourseDetails = () => {
    const { code } = useParams();
    const course = getCourseByCode(code)

    if(!course) return <p>No Course Found</p>

    return (
        <div>
            <h2>{course.name} ({course.code})</h2>
            <p>Units: {course.units}</p>
            <p>Days: {course.days.join(", ")}</p>
            <Link to="tasks">View Tasks</Link>
            <Outlet></Outlet>
        </div>
    )
}

export default CourseDetails