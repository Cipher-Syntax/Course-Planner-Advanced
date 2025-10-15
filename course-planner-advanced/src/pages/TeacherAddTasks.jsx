import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { IoIosArrowRoundBack, IoMdAdd, IoMdRemove } from 'react-icons/io';

const TeacherAddTasks = () => {
    const { code } = useParams();
    const [taskTitle, setTaskTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [time, setTime] = useState('');
    const [criteria, setCriteria] = useState([
        { criteriaName: '', criteriaDescription: '', score: '' },
    ]);
    const [uploadedFile, setUploadedFile] = useState(null);
    const [message, setMessage] = useState('');

    const storedMovies = JSON.parse(localStorage.getItem("courses")) || [];

    const handleAddCriteria = () => {
        setCriteria([...criteria, { criteriaName: '', criteriaDescription: '', score: '' }]);
    };

    const handleRemoveCriteria = (index) => {
        const newCriteria = criteria.filter((_, i) => i !== index);
        setCriteria(newCriteria);
    };

    const handleCriteriaChange = (index, field, value) => {
        const newCriteria = [...criteria];
        newCriteria[index][field] = value;
        setCriteria(newCriteria);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log({ taskTitle, description, dueDate, time, criteria, uploadedFile });
        const newTasks = {
            id: Date.now(),
            title: taskTitle,
            description: description,
            due_date: dueDate,
            time: time,
            criteria: criteria,
            uploaded_file: null
        }

        const updatedTasksInCourse = storedMovies.map((course) => {
            if (course.code === code) {
                return {
                    ...course,
                    tasks: [...(course.tasks || []), newTasks]
                };
            }
            return course;
        });

        localStorage.setItem('courses', JSON.stringify(updatedTasksInCourse));

        setMessage("Task added successfully")
        setTaskTitle('')
        setDescription('')
        setDueDate('')
        setTime('')
        setCriteria([{ criteriaName: '', criteriaDescription: '', score: '' },])

        const timer = setTimeout(() => {
            setMessage('')
        }, 2000)

        return () => clearTimeout(timer);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <Link to={`/teacherCourseDetails/${code}`} className="flex items-center gap-2 text-gray-700 mb-6">
                <IoIosArrowRoundBack size={28} />
                <span>Back to Course</span>
            </Link>

            <h1 className="text-3xl font-bold mb-6">Add Task for {code}</h1>

            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md space-y-6">
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Task Title</label>
                    <input
                        type="text"
                        value={taskTitle}
                        onChange={(e) => setTaskTitle(e.target.value)}
                        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-2">Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows="4"
                        required
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Due Date</label>
                        <input
                            type="date"
                            value={dueDate}
                            onChange={(e) => setDueDate(e.target.value)}
                            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Time</label>
                        <input
                            type="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-2">Criteria</label>
                    {criteria.map((c, idx) => (
                        <div key={idx} className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-3 items-end">
                            <input
                                type="text"
                                placeholder="Criteria Name"
                                value={c.criteriaName}
                                onChange={(e) => handleCriteriaChange(idx, 'criteriaName', e.target.value)}
                                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Description"
                                value={c.criteriaDescription}
                                onChange={(e) => handleCriteriaChange(idx, 'criteriaDescription', e.target.value)}
                                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <input
                                type="number"
                                placeholder="Score"
                                value={c.score}
                                onChange={(e) => handleCriteriaChange(idx, 'score', e.target.value)}
                                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => handleRemoveCriteria(idx)}
                                className="text-red-500 text-lg hover:text-red-700"
                            >
                                <IoMdRemove />
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={handleAddCriteria}
                        className="flex items-center gap-1 text-green-600 hover:text-green-700 font-medium"
                    >
                        <IoMdAdd /> Add Criteria
                    </button>
                </div>

                {/* <div>
                    <label className="block text-gray-700 font-medium mb-2">Upload File (Optional)</label>
                    <input type="file" onChange={(e) => setUploadedFile(e.target.files[0])} />
                </div> */}

                <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition font-medium"
                >
                    Add Task
                </button>

                {
                    message && (
                        <p className='text-green-500 m-2 text-center'>{message}</p>
                    )
                }
            </form>

            
        </div>
    );
};

export default TeacherAddTasks;
