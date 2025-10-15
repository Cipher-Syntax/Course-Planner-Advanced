import React, { useState } from 'react';
import { FaChalkboardTeacher, FaLock, FaUserGraduate } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import { TeacherData } from '../data/TeacherData';

const TeacherLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const teacher = TeacherData.find(
            (t) => t.email === email && t.password === password
        );

        if (teacher) {
            setError('');
            localStorage.setItem('currentTeacherLoggedIn', JSON.stringify(teacher));
            navigate('/teacherDashboard');
        } else {
            setError('Email or password is incorrect.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h2 className="text-2xl font-bold mb-6">Teacher Login</h2>
            <form className="flex flex-col gap-4 w-full max-w-sm" onSubmit={handleLogin}>
                
                <div className="flex items-center gap-2 border rounded p-2 bg-white">
                    <FaChalkboardTeacher className="text-green-600 w-5 h-5" />
                    <input
                        type="email"
                        value={email}
                        placeholder="Teacher Email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 outline-none"
                        required
                    />
                </div>

                <div className="flex items-center gap-2 border rounded p-2 bg-white">
                    <FaLock className="text-gray-600 w-5 h-5" />
                    <input
                        type="password"
                        value={password}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="flex-1 outline-none"
                        required
                    />
                </div>

                {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                <button
                    type="submit"
                    className="bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
                >
                    Login
                </button>
            </form>

            <div className="w-full flex justify-end mt-5 max-w-sm">
                <Link to="/studentLogin" className="text-green-500 text-2xl">
                    <FaUserGraduate></FaUserGraduate>
                </Link>
            </div>

        </div>
    );
};

export default TeacherLogin;
