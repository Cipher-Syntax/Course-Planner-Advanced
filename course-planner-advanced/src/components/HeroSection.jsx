import React from 'react'
import { CiSearch } from "react-icons/ci";

const HeroSection = ({ q, setSearchParams }) => {
    const currentStudentLoggedIn = JSON.parse(localStorage.getItem('currentStudentLoggedIn'));
    // console.log(currentStudentLoggedIn)
    return (
        <section className='w-full px-4 sm:px-8 md:px-10'>
            <div className='mt-10 sm:mt-16 md:mt-20 text-center sm:text-left'>
                {
                    currentStudentLoggedIn && <p className='text-3xl sm:text-5xl font-bold leading-relaxed tracking-wide'>Welcome {currentStudentLoggedIn.username}</p>
                }
                <h1 className='text-2xl sm:text-3xl md:text-4xl leading-relaxed tracking-wide font-bold'>
                    My Courses
                </h1>
                <p className='text-sm sm:text-base'>
                    Stay organized and keep track of your academic progress
                </p>
            </div>

            <div className='w-full sm:w-[85%] md:w-[70%] mx-auto my-10 sm:my-16 md:my-20'>
                <div className='relative'>
                    <CiSearch className='absolute left-4 sm:left-6 top-1/2 transform -translate-y-1/2 text-black w-4 h-4 sm:w-5 sm:h-5' />

                    <input
                        type="text"
                        placeholder='Search courses here...'
                        value={q}
                        onChange={(e) =>
                            setSearchParams(prev => {
                                const params = new URLSearchParams(prev);
                                params.set('q', e.target.value)
                                return params
                            })
                        }
                        className='w-full bg-white text-black px-12 sm:px-16 py-2 sm:py-3 rounded-full outline-green-700 text-base sm:text-lg border-2'
                    />
                </div>
            </div>
        </section>
    )
}

export default HeroSection
