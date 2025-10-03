const STORAGE = "courses"

export const getCourses = () => {
    const savedData = localStorage.getItem(STORAGE);
    return savedData ? JSON.parse(savedData) : [];
}

export const saveCourses = (courses) => {
    localStorage.setItem(STORAGE ,JSON.stringify(courses));
}

export const getCourseByCode = (code) => {
    return getCourses().find(course => course.code === code)
}
