import React from 'react'
import { getCourses } from '../utils/storage'
import { Link, useSearchParams } from 'react-router-dom';
import { FaUnity } from "react-icons/fa";
import { IoMdCalendar } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { Filtering, FloatingHelpButton, Footer, Header, HeroSection } from '../components';

const CourseList = () => {
    const courses = getCourses();
    
    const [searchParams, setSearchParams] = useSearchParams();
    const q = searchParams.get("q") || "";
    const selectedDay = searchParams.get("day") || "";
    const selectedTeacher = searchParams.get("teacher") || "";
    const sortBy = searchParams.get("sort") || "name";

    const filtered = courses
        .filter((course) =>
            course.code.toLowerCase().includes(q.toLowerCase()) ||
            course.name.toLowerCase().includes(q.toLowerCase())
        )
        .filter((course) =>
            selectedDay ? course.days.map(d => d.toLowerCase()).includes(selectedDay.toLowerCase()) : true
        )
        .filter((course) =>
            selectedTeacher ? course.teacher.toLowerCase().replace(/\s+/g, "-") === selectedTeacher : true
        )
        .sort((a, b) => {
            if (sortBy === "name") return a.name.localeCompare(b.name);
            if (sortBy === "units") return b.units - a.units;
            return 0;
        });

    return (
        <>  
            <Header></Header>
            <HeroSection q={q} setSearchParams={setSearchParams}/>
            <Filtering searchParams={searchParams} setSearchParams={setSearchParams}
            />
            <div className='w-full px-4 sm:px-10 md:px-20 mt-10 md:mt-20 flex flex-1 flex-wrap items-center justify-center md:justify-evenly gap-6'>
                {
                    filtered.length === 0 ? (
                        <p>Course doesn't exist</p>
                    ): (
                        filtered.map((course) => (
                            <div 
                                className='w-full sm:w-[320px] md:w-[400px] shadow-2xl h-auto md:h-[300px] rounded-b-2xl mb-10 md:mb-20 flex flex-col' 
                                key={course.code}
                            >
                                <div 
                                    className={'p-4 md:p-5 rounded-t-2xl'} 
                                    style={{backgroundColor: course.themeColor}}
                                >
                                    <h1 className='text-2xl md:text-3xl text-white tracking-wide leading-relaxed font-medium'>{course.code}</h1>
                                    <div className='flex items-center gap-x-1 text-xs md:text-[13px] text-white'>
                                        <FaUnity></FaUnity>
                                        <p>{course.units} Units</p>
                                    </div>
                                </div>

                                <div className='px-4 md:px-5 mt-3 flex-1'>
                                    <h2 className='font-medium tracking-wide leading-relaxed text-base md:text-lg'>{course.name}</h2>

                                    <div className='flex items-center gap-x-1 text-xs md:text-[12px] mt-2'>
                                        <IoMdCalendar></IoMdCalendar>
                                        <p>{course.days.join(', ')} - {course.start_time} : {course.end_time}</p>
                                    </div>

                                    <div className='flex items-center gap-x-1 text-xs md:text-[12px] mt-2'>
                                        <FaRegUser></FaRegUser>
                                        <p>{course.teacher.includes("Prof.") ? course.teacher : `Prof ${course.teacher}` }</p>
                                    </div>
                                </div>

                                <div className='flex flex-col sm:flex-row items-stretch justify-between px-4 md:px-5 mt-6 md:mt-10 gap-3 md:gap-x-3 mb-4'>
                                    <Link to={`/course/${course.code}/?${searchParams.toString()}`} className='w-full sm:w-1/2'>
                                        <button 
                                            type='button' 
                                            className='bg-green-500 text-white font-bold text-center w-full rounded-full cursor-pointer py-2 md:py-0'
                                        >
                                            Details
                                        </button>
                                    </Link>
                                    <Link to={`/course/${course.code}/tasks/?${searchParams.toString()}`} className='w-full sm:w-1/2'>
                                        <button 
                                            type='button' 
                                            className='bg-white text-green-500 border-[1px] font-bold border-green-500 text-center w-full rounded-full cursor-pointer py-2 md:py-0'
                                        >
                                            Tasks
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))
                    )
                }
            </div>
            <FloatingHelpButton></FloatingHelpButton>
            <Footer></Footer>
        </>
    )
}

export default CourseList
