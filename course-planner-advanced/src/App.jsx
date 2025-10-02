import Reat from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, CourseList, CourseDetails, CourseTasks, Help, Teachers } from './pages'
import { getCourses, saveCourses } from './utils/storage'
import { CourseData } from './data/CourseData'


const App = () => {
    let courses = getCourses();
    const updatedCourse = [...courses]

    CourseData.forEach(data => {
        const exists = updatedCourse.some(course => course.code === data.code)
        if (!exists) return updatedCourse.push(data)
    })

    if (updatedCourse.length !== courses.length) {
        saveCourses(updatedCourse);
        courses = updatedCourse; 
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/course' element={<CourseList></CourseList>}></Route>
                <Route path='/course/:code' element={<CourseDetails></CourseDetails>}>
                    <Route path='tasks' element={<CourseTasks></CourseTasks>} />
                </Route>
                <Route path='/teachers' element={<Teachers></Teachers>}></Route>
                <Route path='/help' element={<Help></Help>}></Route>
                
            </Routes>
        </BrowserRouter>
    )
}

export default App