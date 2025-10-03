import React from 'react'
import { BsCalendar4 } from "react-icons/bs";
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className='w-full px-10 py-5 flex items-center justify-between shadow-lg'>
            <div className='flex items-center justify-start gap-x-10'>
                <div className='flex items-center gap-5'>
                    <BsCalendar4 className='text-3xl'></BsCalendar4>
                    <div>
                        <h1 className='leading-relaxed tracking-wider text-2xl text-green-700 font-medium'>Course-Planner-Advanced</h1>
                        <p>by Spectrum Lab</p>
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-between gap-x-5'>
                <NavLink to="/course" className={({isActive}) => isActive ? "text-white px-5 py-2 bg-green-500 rounded-md" : "text-green-500 px-5 py-2 bg-white rounded-md border-green-500 border-2"}>Courses</NavLink>
                <NavLink to="/teachers" className={({isActive}) => isActive ? "text-white px-5 py-2 bg-green-500 rounded-md" : "text-green-500 px-5 py-2 bg-white rounded-md border-green-500 border-2"}>Teachers</NavLink>
            </div>
            
        </header>
    )
    }

export default Header