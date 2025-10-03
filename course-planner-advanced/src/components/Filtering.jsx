import React, { useState } from 'react'
import { FaFilter } from "react-icons/fa";
import { getCourses } from '../utils/storage';

const Filtering = ({searchParams, setSearchParams}) => {
    const courses = getCourses()

    const allDays = [...new Set(courses.flatMap(course => course.days || []))];
    const allTeachers = [...new Set(courses.map(course => course.teacher).filter(Boolean))];
    const selectedDay = searchParams.get("day") || "";
    const selectedTeacher = searchParams.get("teacher") || "";
    const sortBy = searchParams.get("sort") || "name";

    const updateParam = (key, value) => {
        const params = Object.fromEntries(searchParams.entries());
        if (value) {
            params[key] = value;
        } else {
            delete params[key];
        }
        setSearchParams(params);
    };

    return (
        <div className='w-full px-20 mt-20'>
            <div className='flex items-center gap-x-2'>
                <FaFilter size={20}></FaFilter>
                <p className='text-2xl leading-relaxed tracking-wide'>Filter by:</p>
            </div>

            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-x-5'>
                    <select className='border-[1px] px-6 py-1 rounded-full mt-3' value={selectedDay} onChange={(e) => updateParam("day", e.target.value)}>
                        <option value="">Day</option>
                        {
                            allDays.map((day, index) => (
                                <option key={index} value={day.toLowerCase()}>{day}</option>
                            ))
                        }
                    </select>

                    <select className='border-[1px] px-6 py-1 rounded-full mt-3' value={selectedTeacher} onChange={(e) => updateParam("teacher", e.target.value)}>
                        <option value="">Teacher</option>
                        {
                            allTeachers.map((teacher, index) => (
                                <option key={index} value={teacher.toLowerCase().replace(/\s+/g, "-")}>{teacher}</option>
                            ))
                        }
                    </select>
                </div>

                <div className='flex items-center gap-x-3'>
                    <p>Sort By:</p>
                    <div className='flex items-center gap-x-3'>
                        <p>Sort By:</p>
                        <div className='flex items-center gap-x-3'>
                            <button
                                onClick={() => updateParam("sort", "name")}
                                className={`px-5 py-1 rounded-full border cursor-pointer
                                    ${sortBy === "name"
                                        ? "bg-green-500 text-white border-green-500"
                                        : "bg-white text-green-500 border-green-500"
                                    }`}
                            >
                                Name
                            </button>

                            <button
                                onClick={() => updateParam("sort", "units")}
                                className={`px-5 py-1 rounded-full border cursor-pointer
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

            
        </div>
    )
}

export default Filtering