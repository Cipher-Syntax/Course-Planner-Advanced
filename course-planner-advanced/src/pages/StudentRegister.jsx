import React, { useState } from 'react';
import { FaUserGraduate, FaEnvelope, FaLock } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const StudentRegister = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const storedStudents = JSON.parse(localStorage.getItem('students')) || [];
        const existingStudent = storedStudents.find(s => s.email === email);

        if (existingStudent) {
            setError('This email is already registered.');
            return;
        }

        const newStudent = { username, email, password };
        localStorage.setItem('students', JSON.stringify([...storedStudents, newStudent]));

        setUsername('');
        setEmail('');
        setPassword('');
        setError('');

        // alert('Student registered successfully!');
        setMessage('Student registered successfully');

        const timer = setTimeout(() => {
            setMessage('')
            navigate('/studentLogin'); 
        }, 2000)

        return () => clearInterval(timer)
    };

    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4'>
            <form className='flex flex-col gap-4 w-full max-w-sm' onSubmit={handleSubmit}>
                
                <div className='flex items-center gap-2 border rounded p-2 bg-white'>
                    <FaUserGraduate className='text-blue-600 w-5 h-5' />
                    <input
                        type="text"
                        value={username}
                        placeholder='Student Username'
                        onChange={(e) => setUsername(e.target.value)}
                        className='flex-1 outline-none'
                        required
                    />
                </div>

                <div className='flex items-center gap-2 border rounded p-2 bg-white'>
                    <FaEnvelope className='text-gray-600 w-5 h-5' />
                    <input
                        type="email"
                        value={email}
                        placeholder='Email'
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

                {error && <p className='text-red-500 text-sm'>{error}</p>}

                <button
                    type='submit'
                    className='bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition'
                >
                    Register
                </button>
            </form>

            {
                message && (
                    <p className='text-green-500 m-2'>{message}</p>
                )
            }

            <p className='mt-4 text-sm'>
                Already have an account? <Link to="/studentLogin" className='text-blue-600 hover:underline'>Login</Link>
            </p>
        </div>
    );
};

export default StudentRegister;
