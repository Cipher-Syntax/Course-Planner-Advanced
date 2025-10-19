import React, { useState } from 'react'
import { FaFilter } from "react-icons/fa";
import { getCourses } from '../utils/storage';

const Filtering = ({ searchParams, setSearchParams }) => {
    const courses = getCourses()

    const allDays = [...new Set(courses.flatMap(course => course.days || []))];
    const allTeachers = [...new Set(courses.map(course => course.teacher).filter(Boolean))];
    const selectedDay = searchParams.get("day") || "";
    const selectedTeacher = searchParams.get("teacher") || "";
    const sortBy = searchParams.get("sort") || "name";

    const updateParam = (key, value) => {
        const params = new URLSearchParams(searchParams);
        if (value) {
            params.set(key, value)
        } else {
            params.delete(key)
        }
        setSearchParams(params)
    }

    return (
        <div className='w-full px-4 sm:px-10 md:px-20 mt-10 md:mt-20'>
            {/* Filter Title */}
            <div className='flex items-center gap-x-2 mb-5'>
                <FaFilter size={20} />
                <p className='text-xl md:text-2xl leading-relaxed tracking-wide'>Filter by:</p>
            </div>

            {/* Filters & Sorting */}
            <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-0'>
                
                {/* Select Filters */}
                <div className='flex flex-wrap gap-3'>
                    <select
                        className='border-[1px] px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base'
                        value={selectedDay}
                        onChange={(e) => updateParam("day", e.target.value)}
                    >
                        <option value="">Days</option>
                        {
                            allDays.map((day, index) => (
                                <option key={index} value={day.toLowerCase()}>{day}</option>
                            ))
                        }
                    </select>

                    <select
                        className='border-[1px] px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base'
                        value={selectedTeacher}
                        onChange={(e) => updateParam("teacher", e.target.value)}
                    >
                        <option value="">Professors</option>
                        {
                            allTeachers.map((teacher, index) => (
                                <option key={index} value={teacher.toLowerCase().replace(/\s+/g, "-")}>{teacher.toLowerCase().includes("Prof") ? teacher : `Prof ${teacher}`}</option>
                            ))
                        }
                    </select>
                </div>

                {/* Sort Buttons */}
                <div className='flex items-center gap-x-2 sm:gap-x-3 flex-wrap'>
                    <p className='text-sm sm:text-base'>Sort By:</p>
                    <div className='flex gap-2 sm:gap-3'>
                        <button
                            onClick={() => updateParam("sort", "name")}
                            className={`px-4 sm:px-5 py-1 sm:py-2 rounded-full border text-sm sm:text-base cursor-pointer
                                ${sortBy === "name"
                                    ? "bg-green-500 text-white border-green-500"
                                    : "bg-white text-green-500 border-green-500"
                                }`}
                        >
                            Name
                        </button>

                        <button
                            onClick={() => updateParam("sort", "units")}
                            className={`px-4 sm:px-5 py-1 sm:py-2 rounded-full border text-sm sm:text-base cursor-pointer
                                ${sortBy === "units"
                                    ? "bg-green-500 text-white border-green-500"
                                    : "bg-white text-green-500 border-green-500"
                                }`}
                        >
                            Units
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filtering
