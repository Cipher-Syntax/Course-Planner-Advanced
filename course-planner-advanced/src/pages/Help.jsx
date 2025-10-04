import React, { useState } from 'react';
import { FaQuestionCircle } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Header } from '../components';

const Help = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "How do I search for a course?",
            answer: "Go to the Courses page and use the search bar or filters to find your course by code, teacher, or schedule."
        },
        {
            question: "How can I update my course details?",
            answer: "Navigate to your course, then select Edit. Make changes and click Save to update."
        },
        {
            question: "Why don’t I see my teacher in the list?",
            answer: "The teacher must first be added to the system. Contact your administrator if the teacher is missing."
        }
    ];

    return (
        <>
            <Header />
            <div className="max-w-4xl mx-auto px-6 py-12">
                <div className="flex items-center gap-3 mb-8">
                    <FaQuestionCircle className="text-3xl text-green-600" />
                    <h1 className="text-3xl font-bold text-gray-800">Help & Support</h1>
                </div>

                <p className="text-gray-600 mb-10 text-lg">
                    Welcome to the Help Center! Here you’ll find answers to common questions 
                    and resources to guide you through using the system effectively.
                </p>

                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
                    
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-xl shadow-sm"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center px-5 py-4 text-left font-medium text-gray-800 hover:bg-green-50 transition ease-in-out"
                            >
                                {faq.question}
                                {
                                    openIndex === index ? (
                                        <IoIosArrowUp className="text-green-600" />
                                    ) : (
                                        <IoIosArrowDown className="text-gray-500" />
                                    )
                                }
                            </button>

                            {openIndex === index && (
                                <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Help;
