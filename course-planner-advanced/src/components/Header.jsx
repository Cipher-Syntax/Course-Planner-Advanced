import React from 'react'
import { CgMenuLeftAlt } from "react-icons/cg";
import { BsCalendar4 } from "react-icons/bs";

const Header = () => {
    return (
        <header className='w-full px-10 py-5 flex items-center justify-start gap-x-10'>
            <div className='text-3xl cursor-pointer'>
                <CgMenuLeftAlt></CgMenuLeftAlt>
            </div>
            
            <div className='flex items-center gap-3'>
                <BsCalendar4></BsCalendar4>
                <h1 className='leading-relaxed tracking-wider'>Course-Planner-Advanced</h1>
            </div>
            
        </header>
    )
    }

export default Header