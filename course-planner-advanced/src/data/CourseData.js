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
        teacher: "Dr. Eleanor Matrix",
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
    }
];
