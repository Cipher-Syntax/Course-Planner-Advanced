import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { IoIosArrowRoundBack } from 'react-icons/io';

const TeacherAddSubject = () => {
    const navigate = useNavigate();
    const currentTeacher = JSON.parse(localStorage.getItem("currentTeacherLoggedIn"));
    // console.log(currentTeacher.username)
    const storedCourses = JSON.parse(localStorage.getItem("courses")) || [];

    const [code, setCode] = useState('');
    const [name, setName] = useState('');
    const [units, setUnits] = useState('');
    const [days, setDays] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [semester, setSemester] = useState('');
    const [themeColor, setThemeColor] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newCourse = {
            code,
            name,
            units: Number(units),
            days: days.split(',').map(day => day.trim()),
            start_time: startTime,
            end_time: endTime,
            semester,
            teacher: currentTeacher.username || "Unknown Teacher",
            themeColor,
            tasks: []
        };

        localStorage.setItem("courses", JSON.stringify([...storedCourses, newCourse]));

        setMessage("Subject added successfully!");
        setTimeout(() => setMessage(""), 2000);
        navigate("/teacherDashboard");
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
        <h1 className="text-2xl font-bold mb-6">Add New Subject</h1>

        <Link to="/teacherDashboard" className="flex items-center gap-2 text-gray-700 mb-6">
            <IoIosArrowRoundBack size={28} />
            <span>Back to Dashboard</span>
        </Link>

        <form onSubmit={handleSubmit} className="bg-white p-12 rounded-xl shadow-md space-y-4 w-[85%] mx-auto mt-[80px]">
            <div className='flex items-center justify-between gap-x-5'>
                <input type="text" placeholder="Subject Code" value={code} onChange={(e) => setCode(e.target.value)} required className="w-full border rounded px-3 py-2" />
                <input type="text" placeholder="Subject Name" value={name} onChange={(e) => setName(e.target.value)} required className="w-full border rounded px-3 py-2" />
            </div>

            <div className='flex items-center justify-between gap-x-5'>
                <input type="number" placeholder="Units" value={units} onChange={(e) => setUnits(e.target.value)} required className="w-full border rounded px-3 py-2" />
                <input type="text" placeholder="Days (e.g. Mon, Wed)" value={days} onChange={(e) => setDays(e.target.value)} required className="w-full border rounded px-3 py-2" />
            </div>

            <div className='flex items-center justify-between gap-x-5'>
                <input type="time" placeholder="Start Time (e.g. 9:00 AM)" value={startTime} onChange={(e) => setStartTime(e.target.value)} required className="w-full border rounded px-3 py-2" />
                <input type="time" placeholder="End Time (e.g. 10:30 AM)" value={endTime} onChange={(e) => setEndTime(e.target.value)} required className="w-full border rounded px-3 py-2" />
            </div>
            
            <div className='flex items-center justify-between gap-x-5'>
                <input type="text" placeholder="Semester (e.g. 1st Semester)" value={semester} onChange={(e) => setSemester(e.target.value)} required className="w-full border rounded px-3 py-2" />

                <div className='w-full'>
                    <label htmlFor="color">Pick a Color</label>
                    <input type="color" placeholder="Theme Color (e.g. green)" value={themeColor} onChange={(e) => setThemeColor(e.target.value)} required className="w-full border rounded px-3 py-2 h-[100px]" />
                </div>
            </div>
            
            <div className='flex items-center justify-end'>
                <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 cursor-pointer">Add Subject</button>
            </div>
            
            {message && <p className="text-green-500 text-center mt-3">{message}</p>}
        </form>
        </div>
    );
};

export default TeacherAddSubject;
