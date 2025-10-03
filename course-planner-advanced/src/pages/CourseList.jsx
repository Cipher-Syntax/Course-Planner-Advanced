import React, { useState } from 'react'
import { getCourses } from '../utils/storage'
import { Link, useSearchParams } from 'react-router-dom';
import { FaUnity } from "react-icons/fa";
import { IoMdCalendar } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { Filtering, HeroSection } from '../components';

const CourseList = () => {
    const courses = getCourses();
    // const [selectedDay, setSelectedDay] = useState('');
    // const [selectedTeacher, setSelectedTeacher] = useState('');
    // const [sortBy, setSortBy] = useState('name');

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
        // .filter((course) =>
        //     selectedDay ? course.days.includes(selectedDay) : true
        // )
        // .filter((course) =>
        //     selectedTeacher ? course.teacher === selectedTeacher : true
        // )
        // .sort((a, b) => {
        //     if (sortBy === "name") return a.name.localeCompare(b.name);
        //     if (sortBy === "units") return b.units - a.units;
        //     return 0;
        // });
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
            <HeroSection q={q} setSearchParams={setSearchParams}/>
            {/* <Filtering selectedDay={selectedDay} setSelectedDay={setSelectedDay} selectedTeacher={selectedTeacher} setSelectedTeacher={setSelectedTeacher} sortBy={sortBy} setSortBy={setSortBy}></Filtering> */}
            <Filtering
                searchParams={searchParams}
                setSearchParams={setSearchParams}
            />
            <div className='w-full px-20 mt-20 flex flex-1 flex-wrap items-center justify-evenly'>
                {
                    filtered.length === 0 ? (
                        <p>Course doesn't exist</p>
                    ): (
                        filtered.map((course) => (
                            <div className='w-[400px] shadow-2xl h-[300px] rounded-b-2xl mb-20' key={course.code}>
                                <div className={'p-5 rounded-t-2xl'} style={{backgroundColor: course.themeColor}}>
                                    <h1 className='text-3xl text-white tracking-wide leading-relaxed font-medium'>{course.code}</h1>
                                    <div className='flex items-center gap-x-1 text-[13px] text-white'>
                                        <FaUnity></FaUnity>
                                        <p>{course.units} Units</p>
                                    </div>
                                </div>

                                <div className='px-5 mt-3'>
                                    <h2 className='font-medium tracking-wide leading-relaxed'>{course.name}</h2>

                                    <div className='flex items-center gap-x-1 text-[12px] mt-2'>
                                        <IoMdCalendar></IoMdCalendar>
                                        <p>{course.days.join(', ')} - {course.start_time} : {course.end_time}</p>
                                    </div>

                                    <div className='flex items-center gap-x-1 text-[12px] mt-2'>
                                        <FaRegUser></FaRegUser>
                                        <p>Prof. {course.teacher}</p>
                                    </div>
                                </div>


                                <div className='flex items-center justify-between px-5 mt-10 gap-x-3'>
                                    <Link to={`/course/${course.code}`} className='w-1/2'>
                                        <button type='button' className='bg-green-500 text-white font-bold text-center w-full rounded-full cursor-pointer'>Details</button>
                                    </Link>
                                    <Link to={`/course/${course.code}/tasks`} className='w-1/2'>
                                        <button type='button' className='bg-white text-green-500 border-[1px] font-bold border-green-500 text-center w-full rounded-full cursor-pointer'>Tasks</button>
                                    </Link>
                                </div>
                            </div>
                        ))
                    )
                }
                {/* {
                    courses.map((course) => (
                        <li key={course.code}>
                            <Link to={`/course/${course.code}`}>
                                <p>{course.code} - {course.units}</p>
                            </Link>
                        </li>
                    ))
                } */}
            </div>
        </>
    )
}

export default CourseList