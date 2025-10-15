import React, { useState } from 'react';
import { FaUserGraduate, FaLock, FaChalkboardTeacher } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const StudentLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const storedStudents = JSON.parse(localStorage.getItem('students')) || [];

        const student = storedStudents.find(
            (s) => s.email === email && s.password === password
        );

        if (student) {
            setError('');
            localStorage.setItem('currentStudentLoggedIn', JSON.stringify(student));
            navigate('/course');
        } else {
            setError('Email or password is incorrect.');
        }
    };


    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4'>
            <h2 className="text-2xl font-bold mb-6">Student Login</h2>
            <form className='flex flex-col gap-4 w-full max-w-sm' onSubmit={handleLogin}>

                <div className='flex items-center gap-2 border rounded p-2 bg-white'>
                    <FaUserGraduate className='text-blue-600 w-5 h-5' />
                    <input
                        type="email"
                        value={email}
                        placeholder='Student Email'
                        onChange={(e) => setEmail(e.target.value)}
                        className='flex-1 outline-none'
                        required
                    />
                </div>

                <div className='flex items-center gap-2 border rounded p-2 bg-white'>
                    <FaLock className='text-gray-600 w-5 h-5' />
                    <input
                        type="password"
                        value={password}
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                        className='flex-1 outline-none'
                        required
                    />
                </div>

                {error && <p className='text-red-500 text-sm text-center'>{error}</p>}

                <button
                    type='submit'
                    className='bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition'
                >
                    Login
                </button>

            </form>

            <p className='mt-4 text-sm'>
                Don't have an account? <Link to="/StudentRegister" className='text-blue-600 hover:underline'>Register</Link>
            </p>

            <div className="w-full flex justify-end mt-5 max-w-sm">
                <Link to="/teacherLogin" className="text-blue-500 text-2xl">
                    <FaChalkboardTeacher></FaChalkboardTeacher>
                </Link>
            </div>
        </div>
    );
};

export default StudentLogin;
