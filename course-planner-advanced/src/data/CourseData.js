export const CourseData = [
    {
        code: "CS101",
        name: "Introduction to Computer Science",
        units: 3,
        days: ["Mon", "Wed"],
        start_time: "10:00 AM",
        end_time: "12:00 PM",
        semester: "1st Semester",
        teacher: "Cipher Syntax",
        themeColor: "green",
        tasks: [
            { 
                id: "1", 
                title: "Assignment 1: Basics", 
                description: "Write a short paper explaining binary numbers and how computers process data.",
                due_date: "Oct. 04 2025",
                time: "11:59 PM",
                criteria: [
                    { criteriaName: "Cleanliness", criteriaDescription: "Neat and well-organized formatting", score: 10 },
                    { criteriaName: "Completeness", criteriaDescription: "All required sections fully included", score: 10 },
                    { criteriaName: "Accuracy", criteriaDescription: "Correct explanation of binary concepts", score: 15 },
                    { criteriaName: "Clarity", criteriaDescription: "Easy to follow and well-written", score: 5 }
                ]
            },
            { 
                id: "2", 
                title: "Project: Simple Calculator", 
                description: "Create a CRUD calculator application (add, subtract, multiply, divide, and edit/delete operations).",
                due_date: "Oct. 04 2025",
                time: "11:59 PM",
                criteria: [
                    { criteriaName: "Functionality", criteriaDescription: "All CRUD operations work correctly", score: 30 },
                    { criteriaName: "Code Quality", criteriaDescription: "Readable, maintainable, and efficient code", score: 20 },
                    { criteriaName: "Accuracy", criteriaDescription: "Correct results for all calculations", score: 25 },
                    { criteriaName: "Presentation", criteriaDescription: "User interface clarity and usability", score: 25 }
                ]
            }
        ]
    },
    {
        code: "MATH201",
        name: "Linear Algebra",
        units: 4,
        days: ["Tue", "Thu"],
        start_time: "10:00 AM",
        end_time: "11:30 AM",
        semester: "1st Semester",
        teacher: "Cipher Syntax",
        themeColor: "red",
        tasks: [
            { 
                id: "3", 
                title: "Homework: Matrix Operations", 
                description: "Solve problems on matrix addition, subtraction, multiplication, and inverses.",
                due_date: "Oct. 04 2025",
                time: "11:59 PM",
                criteria: [
                    { criteriaName: "Completeness", criteriaDescription: "All assigned problems attempted", score: 10 },
                    { criteriaName: "Accuracy", criteriaDescription: "Correct solutions and steps shown", score: 20 },
                    { criteriaName: "Neatness", criteriaDescription: "Legible and well-organized solutions", score: 10 }
                ]
            },
            { 
                id: "4", 
                title: "Quiz: Vectors", 
                description: "Short quiz covering vector spaces, dot product, and cross product.",
                due_date: "Oct. 04 2025",
                time: "11:59 PM",
                criteria: [
                    { criteriaName: "Accuracy", criteriaDescription: "Correct answers to problems", score: 20 },
                    { criteriaName: "Clarity", criteriaDescription: "Work and reasoning clearly shown", score: 10 }
                ]
            }
        ]
    },
    {
        code: "ENG105",
        name: "Academic Writing",
        units: 3,
        days: ["Mon", "Wed", "Fri"],
        start_time: "1:00 PM",
        end_time: "2:30 PM",
        semester: "1st Semester",
        teacher: "Prof. Jane Wordsworth",
        themeColor: "blue",
        tasks: [
            { 
                id: "5", 
                title: "Essay 1: Self-Introduction", 
                description: "Write a 2-page essay introducing yourself and your academic goals.",
                due_date: "Oct. 04 2025",
                time: "11:59 PM",
                criteria: [
                    { criteriaName: "Structure", criteriaDescription: "Logical flow and clear organization", score: 15 },
                    { criteriaName: "Content", criteriaDescription: "Relevant details about self and goals", score: 20 },
                    { criteriaName: "Grammar & Mechanics", criteriaDescription: "Proper grammar, spelling, punctuation", score: 10 },
                    { criteriaName: "Creativity", criteriaDescription: "Originality and engaging writing style", score: 5 }
                ]
            },
            { 
                id: "6", 
                title: "Research Draft", 
                description: "Submit a draft outline for your chosen research topic.",
                due_date: "Oct. 04 2025",
                time: "11:59 PM",
                criteria: [
                    { criteriaName: "Outline Completeness", criteriaDescription: "All key sections included", score: 15 },
                    { criteriaName: "Clarity", criteriaDescription: "Easy-to-understand structure", score: 10 },
                    { criteriaName: "Relevance", criteriaDescription: "Focused and on-topic", score: 10 },
                    { criteriaName: "Formatting", criteriaDescription: "Consistent style and neat presentation", score: 5 }
                ]
            }
        ]
    },
    {
        code: "HIST210",
        name: "World History",
        units: 3,
        days: ["Tue", "Thu"],
        start_time: "2:00 PM",
        end_time: "3:30 PM",
        semester: "1st Semester",
        teacher: "Dr. Marcus Chronicle",
        themeColor: "orange",
        tasks: [
            { 
                id: "7", 
                title: "Timeline Project", 
                description: "Create a visual timeline of major historical events from 1500 to 1900.",
                due_date: "Oct. 04 2025",
                time: "11:59 PM",
                criteria: [
                    { criteriaName: "Content", criteriaDescription: "Covers all major events accurately", score: 25 },
                    { criteriaName: "Creativity", criteriaDescription: "Visual appeal and originality", score: 20 },
                    { criteriaName: "Organization", criteriaDescription: "Clear sequence of events", score: 20 },
                    { criteriaName: "Presentation", criteriaDescription: "Professional and neat output", score: 15 }
                ]
            },
            { 
                id: "8", 
                title: "Essay: Industrial Revolution", 
                description: "Discuss the social and economic impacts of the Industrial Revolution in Europe.",
                due_date: "Oct. 04 2025",
                time: "11:59 PM",
                criteria: [
                    { criteriaName: "Thesis & Argument", criteriaDescription: "Clear central argument with supporting evidence", score: 20 },
                    { criteriaName: "Content Depth", criteriaDescription: "Detailed analysis of social and economic impacts", score: 20 },
                    { criteriaName: "Grammar & Style", criteriaDescription: "Correct mechanics and academic tone", score: 10 }
                ]
            }
        ]
    },
    {
        code: "PHY110",
        name: "General Physics I",
        units: 4,
        days: ["Mon", "Wed", "Fri"],
        start_time: "8:00 AM",
        end_time: "9:30 AM",
        semester: "1st Semester",
        teacher: "Cipher Syntax",
        themeColor: "purple",
        tasks: [
            { 
                id: "9", 
                title: "Lab Report 1: Motion", 
                description: "Conduct and report an experiment on uniform and accelerated motion.",
                due_date: "Oct. 06 2025",
                time: "11:59 PM",
                criteria: [
                    { criteriaName: "Procedure", criteriaDescription: "Steps clearly followed and documented", score: 15 },
                    { criteriaName: "Data Accuracy", criteriaDescription: "Correct measurements and calculations", score: 20 },
                    { criteriaName: "Analysis", criteriaDescription: "Interpretation of results is sound", score: 15 }
                ]
            },
            { 
                id: "10", 
                title: "Quiz: Newton’s Laws", 
                description: "Short quiz covering the three laws of motion with real-world applications.",
                due_date: "Oct. 10 2025",
                time: "11:59 PM",
                criteria: [
                    { criteriaName: "Accuracy", criteriaDescription: "Correct answers to problems", score: 25 },
                    { criteriaName: "Clarity", criteriaDescription: "Reasoning clearly shown", score: 15 }
                ]
            }
        ]
    },
    {
        code: "CHEM120",
        name: "General Chemistry",
        units: 3,
        days: ["Tue", "Thu"],
        start_time: "9:00 AM",
        end_time: "10:30 AM",
        semester: "1st Semester",
        teacher: "Dr. Marie Curie",
        themeColor: "teal",
        tasks: [
            { 
                id: "11", 
                title: "Lab: Chemical Reactions", 
                description: "Perform and record observations of different types of chemical reactions.",
                due_date: "Oct. 07 2025",
                time: "11:59 PM",
                criteria: [
                    { criteriaName: "Observation", criteriaDescription: "Detailed and accurate recording", score: 15 },
                    { criteriaName: "Analysis", criteriaDescription: "Correct interpretation of reactions", score: 20 },
                    { criteriaName: "Safety", criteriaDescription: "Proper lab procedures followed", score: 15 }
                ]
            },
            { 
                id: "12", 
                title: "Assignment: Periodic Trends", 
                description: "Write a paper explaining periodic trends in atomic size, ionization energy, and electronegativity.",
                due_date: "Oct. 12 2025",
                time: "11:59 PM",
                criteria: [
                    { criteriaName: "Completeness", criteriaDescription: "Covers all trends in detail", score: 20 },
                    { criteriaName: "Accuracy", criteriaDescription: "Correct scientific explanations", score: 20 },
                    { criteriaName: "Clarity", criteriaDescription: "Well-structured and easy to follow", score: 10 }
                ]
            }
        ]
    },
    {
        code: "PSY150",
        name: "Introduction to Psychology",
        units: 3,
        days: ["Mon", "Wed"],
        start_time: "3:00 PM",
        end_time: "4:30 PM",
        semester: "1st Semester",
        teacher: "Dr. Marcus Chronicle",
        themeColor: "pink",
        tasks: [
            { 
                id: "13", 
                title: "Reflection Paper: Human Behavior", 
                description: "Write a reflection on a real-life example of classical or operant conditioning.",
                due_date: "Oct. 08 2025",
                time: "11:59 PM",
                criteria: [
                    { criteriaName: "Insight", criteriaDescription: "Shows deep understanding of conditioning principles", score: 20 },
                    { criteriaName: "Clarity", criteriaDescription: "Clearly explained example", score: 15 },
                    { criteriaName: "Grammar", criteriaDescription: "Proper grammar and flow", score: 15 }
                ]
            },
            { 
                id: "14", 
                title: "Group Presentation: Personality Theories", 
                description: "Prepare a presentation comparing major theories of personality (Freud, Jung, Rogers, etc.).",
                due_date: "Oct. 15 2025",
                time: "11:59 PM",
                criteria: [
                    { criteriaName: "Content", criteriaDescription: "Covers all assigned theories", score: 25 },
                    { criteriaName: "Presentation", criteriaDescription: "Clear and engaging delivery", score: 20 },
                    { criteriaName: "Teamwork", criteriaDescription: "Equal contribution from members", score: 15 }
                ]
            }
        ]
    },
    {
        code: "IT202",
        name: "Database Management Systems",
        units: 3,
        days: ["Fri"],
        start_time: "9:00 AM",
        end_time: "12:00 PM",
        semester: "1st Semester",
        teacher: "Prof. Ada Lovelace",
        themeColor: "indigo",
        tasks: [
            { 
                id: "15", 
                title: "SQL Assignment", 
                description: "Write SQL queries to manage and analyze a student database.",
                due_date: "Oct. 11 2025",
                time: "11:59 PM",
                criteria: [
                    { criteriaName: "Correctness", criteriaDescription: "Queries return expected results", score: 25 },
                    { criteriaName: "Efficiency", criteriaDescription: "Optimized use of SQL operations", score: 20 },
                    { criteriaName: "Clarity", criteriaDescription: "Well-documented queries", score: 15 }
                ]
            },
            { 
                id: "16", 
                title: "Project: Mini Library System", 
                description: "Develop a CRUD application for managing library books and members using SQL and a chosen programming language.",
                due_date: "Oct. 20 2025",
                time: "11:59 PM",
                criteria: [
                    { criteriaName: "Functionality", criteriaDescription: "All CRUD features implemented", score: 30 },
                    { criteriaName: "Database Design", criteriaDescription: "Normalized and well-structured schema", score: 25 },
                    { criteriaName: "Usability", criteriaDescription: "Clear and simple user interface", score: 20 }
                ]
            }
        ]
    },
    {
        code: "WEB101",
        name: "Web Development Fundamentals",
        units: 3,
        days: ["Mon", "Wed"],
        start_time: "4:30 PM",
        end_time: "6:00 PM",
        semester: "1st Semester",
        teacher: "Prof. Ada Lovelace",
        themeColor: "cyan",
        tasks: [
            { 
                id: "17", 
                title: "HTML & CSS Portfolio", 
                description: "Build a simple personal portfolio website using only HTML and CSS.",
                due_date: "Oct. 14 2025",
                time: "11:59 PM",
                criteria: [
                    { criteriaName: "Structure", criteriaDescription: "Well-structured HTML with semantic tags", score: 20 },
                    { criteriaName: "Design", criteriaDescription: "Good use of CSS styling and layout", score: 25 },
                    { criteriaName: "Responsiveness", criteriaDescription: "Works on both desktop and mobile", score: 20 }
                ]
            },
            { 
                id: "18", 
                title: "JavaScript Mini Project", 
                description: "Create an interactive to-do list app using vanilla JavaScript.",
                due_date: "Oct. 21 2025",
                time: "11:59 PM",
                criteria: [
                    { criteriaName: "Functionality", criteriaDescription: "Add, edit, and delete tasks work correctly", score: 30 },
                    { criteriaName: "Code Quality", criteriaDescription: "Clean, readable, and commented JavaScript code", score: 20 },
                    { criteriaName: "User Experience", criteriaDescription: "Smooth interactions and good usability", score: 20 }
                ]
            }
        ]
    },
    

];
