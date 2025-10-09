import React from 'react'
import { Outlet, useParams, Link, useLocation } from 'react-router-dom'
import { getCourseByCode } from '../utils/storage';
import { Header, Footer } from '../components';
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaUnity } from "react-icons/fa";
import { IoMdCalendar } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";

const CourseDetails = () => {
    const { code } = useParams();
    const course = getCourseByCode(code)
    const location = useLocation();
    const isTasksOpen = location.pathname.endsWith("/tasks");
    const search = location.search || "";

    if (!course) return <p>No Course Found</p>

    return (
        <div>
            <Header />
            <div className='w-full px-4 md:px-20 mt-10 md:mt-20'>
                <Link to={`/course/?${search}`} className='flex items-center gap-x-2 cursor-pointer mb-6'>
                    <IoIosArrowRoundBack size={30} />
                    <p className='leading-relaxed tracking-wider'>Back</p>
                </Link>

                <div className="rounded-2xl overflow-hidden">
                    <div
                        className={'p-5 h-48 flex flex-col justify-center'}
                        style={{ backgroundColor: course.themeColor }}
                    >
                        <h1 className='text-3xl md:text-4xl text-white tracking-widest leading-relaxed font-medium'>
                            {course.name}
                        </h1>
                        <h3 className='text-xl md:text-2xl text-white tracking-widest leading-relaxed font-medium'>
                            {course.code}
                        </h3>
                    </div>

                    <div className='flex flex-col md:flex-row gap-6 p-5'>
                        <div className='flex-1 space-y-4'>
                            <div className='flex items-center gap-x-2'>
                                <FaRegUser />
                                <p className='text-xl'>{course.teacher.includes("Prof.") ? course.teacher : `Prof. ${course.teacher}` }</p>
                            </div>

                            <div className='flex items-center gap-x-2 text-sm md:text-base'>
                                <p>{course.semester}</p> |
                                <div className='flex gap-x-1 items-center'>
                                    <FaUnity />
                                    <p>{course.units} Units</p>
                                </div>
                            </div>

                            <div className='flex items-center gap-x-2 text-sm md:text-base'>
                                <IoMdCalendar />
                                <p>{course.days.join(', ')} - {course.start_time} : {course.end_time}</p>
                            </div>
                        </div>

                        <div className='flex-1 relative'>
                            {isTasksOpen ? (
                                <Link to={`/course/${code}`}>
                                    <p className='text-lg md:text-2xl cursor-pointer text-red-500 animate-bounce ease-in-out mb-2'>
                                        Close Tasks
                                    </p>
                                </Link>
                            ) : (
                                <Link to="tasks">
                                    <p className='text-lg md:text-2xl cursor-pointer text-green-500 animate-bounce ease-in-out mb-1'>
                                        View Tasks
                                    </p>
                                    <p className='text-sm text-gray-500'>Stay organized and keep track of your academic progress</p>
                                </Link>
                            )}
                            <div className="mt-6">
                                <Outlet />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default CourseDetails
