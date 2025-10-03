import React from 'react'
import { CiSearch } from "react-icons/ci";

const HeroSection = ({ q, setSearchParams }) => {
    // const q = searchParams.get('q') || '';

    return (
        <section className='w-full px-10'>
            <div className='mt-20'>
                <h1 className='text-4xl leading-relaxed tracking-wide font-bold
                '>My Courses</h1>
                <p>Stay organized and keep track of your academic progress</p>
            </div>

            <div className='w-[70%] mx-auto my-20'>
                <div className='relative'>
                    <CiSearch className='absolute left-6 top-1/2 transform -translate-y-1/2 text-black w-5 h-5'></CiSearch>

                    <input type="text" placeholder='Search courses here...' value={q} onChange={(e) => setSearchParams(prev => {
                            const params = Object.fromEntries(prev.entries());
                            return { ...params, q: e.target.value };
                        })} 
                        className='w-full bg-white text-black placeholder:-white px-16 py-3 rounded-full outline-green-700 text-lg border-2'
                    />
                </div>
            </div>
        </section>
    )
}

export default HeroSection