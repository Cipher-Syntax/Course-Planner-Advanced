import React from 'react'
import { Outlet, useParams, Link, useLocation } from 'react-router-dom'
import { getCourseByCode } from '../utils/storage';
import { Header } from '../components';
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaUnity } from "react-icons/fa";
import { IoMdCalendar } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";

const CourseDetails = () => {
    const { code } = useParams();
    const course = getCourseByCode(code)
    const location = useLocation();
    const isTasksOpen = location.pathname.endsWith("/tasks");

    if(!course) return <p>No Course Found</p>

    return (
        
        <div>
            <div className='w-full px-20 mt-20'>
                <Link to="/course" className='flex items-center gap-x-2 cursor-pointer'>
                    <IoIosArrowRoundBack size={30}></IoIosArrowRoundBack>
                    <p className='leading-relaxed tracking-wider'>Back</p>
                </Link>

                <div>
                    <div className={'p-5 rounded-t-2xl h-48'} style={{backgroundColor: course.themeColor}}>
                        <h1 className='text-3xl text-white tracking-widest leading-relaxed font-medium mt-10'>{course.name}</h1>
                        <h3 className='text-2xl text-white tracking-widest leading-relaxed font-medium'>{course.code}</h3>
                    </div>

                    <div className='flex items-center justify-start gap-x-30'>
                        <div className='p-5 w-[400px]'>
                            <div className='flex items-center gap-x-1 mt-2'>
                                <FaRegUser></FaRegUser>
                                <p className='text-2xl'>Prof. {course.teacher}</p>
                            </div>

                            <div className='flex items-center gap-x-1 text-[15px] mt-3'>
                                <p>{course.semester}</p> | 
                                <div className='flex gap-x-1 items-center'>
                                    <FaUnity></FaUnity>
                                    <p>{course.units} Units</p>
                                </div>
                            </div>

                            <div className='flex items-center gap-x-1 text-[15px] mt-2'>
                                <IoMdCalendar></IoMdCalendar>
                                <p>{course.days.join(', ')} - {course.start_time} : {course.end_time}</p>
                            </div>
                            
                        </div>

                        <div>
                            {
                                isTasksOpen ? (
                                    <Link to={`/course/${code}`}>
                                        <p className='text-2xl cursor-pointer text-red-500 absolute animate-bounce ease-in-out'>Close Tasks</p>
                                    </Link>
                                ) : (
                                    <Link to="tasks">
                                        <p className='text-2xl cursor-pointer mt-[-50px] text-green-500 absolute animate-bounce ease-in-out'>View Tasks</p>
                                        <p className='text-center absolute'>Stay organized and keep track of your academic progress</p>
                                    </Link>
                                )
                            }
                            <Outlet></Outlet>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default CourseDetails