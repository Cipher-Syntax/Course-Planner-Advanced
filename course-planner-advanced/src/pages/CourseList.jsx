import React from 'react'
import { getCourses } from '../utils/storage'
import { Link } from 'react-router-dom';

const CourseList = () => {
    const courses = getCourses();

    return (
        <div>
            {
                courses.map((course) => (
                    <li key={course.code}>
                        <Link to={`/course/${course.code}`}>
                            <p>{course.code} - {course.units}</p>
                        </Link>
                    </li>
                ))
            }
        </div>
    )
}

export default CourseList