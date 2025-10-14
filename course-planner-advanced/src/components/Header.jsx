import React from 'react'
import { BsCalendar4 } from "react-icons/bs";
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className='w-full bg-white border-b border-gray-200 shadow-md px-4 sm:px-8 md:px-10 py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-y-4 sm:gap-y-0'>
            <div className='flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-x-4 sm:gap-x-4 md:gap-x-5 text-center sm:text-left'>
                <BsCalendar4 className='text-2xl sm:text-3xl text-black' />
                <div>
                    <h1 className='leading-relaxed tracking-wide text-2xl sm:text-2xl md:text-3xl text-green-900 font-bold'>
                        Course-Advanced-Planner
                    </h1>
                    <p className='text-sm sm:text-base text-gray-500'>by Spectrum Lab</p>
                </div>
            </div>

            <div className='flex flex-wrap items-center justify-center sm:justify-end gap-3 sm:gap-5'>
                <NavLink 
                    to="/course" 
                    className={({isActive}) => 
                        isActive 
                        ? "text-white px-4 sm:px-5 py-2 bg-green-700 rounded-md text-sm sm:text-base transition-colors duration-200 ease-in-out" 
                        : "text-green-500 px-4 sm:px-5 py-2 bg-white rounded-md border border-green-500 text-sm sm:text-base hover:bg-green-500 hover:text-white transition-colors duration-200 ease-in-out"
                    }
                >
                    Courses
                </NavLink>
                <NavLink 
                    to="/teachers" 
                    className={({isActive}) => 
                        isActive 
                        ? "text-white px-4 sm:px-5 py-2 bg-green-700 rounded-md text-sm sm:text-base transition-colors duration-200 ease-in-out" 
                        : "text-green-500 px-4 sm:px-5 py-2 bg-white rounded-md border border-green-500 text-sm sm:text-base hover:bg-green-500 hover:text-white transition-colors duration-200 ease-in-out"
                    }
                >
                    Teachers
                </NavLink>
                <NavLink to="/studentLogin" className='font-bold' >Logout</NavLink>
            </div>
        </header>
    )
}

export default Header
