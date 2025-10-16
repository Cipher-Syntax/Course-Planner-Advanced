import Reat from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, CourseList, CourseDetails, CourseTasks, Help, Teachers, StudentRegister, TeacherLogin, StudentLogin, TeacherDashboard, TeacherCourseDetails, TeacherAddTasks, TeacherAddSubject, NotFound, Layout } from './pages'
import { getCourses, saveCourses } from './utils/storage'
import { CourseData } from './data/CourseData'
import { Header } from './components'


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
                    <Route path='/studentRegister' element={<StudentRegister></StudentRegister>}></Route>
                    <Route path='/teacherLogin' element={<TeacherLogin></TeacherLogin>}></Route>
                    <Route path='/studentLogin' element={<StudentLogin></StudentLogin>}></Route>

                    <Route path='/teacherDashboard' element={<TeacherDashboard></TeacherDashboard>}></Route>
                    <Route path='/teacherAddSubject' element={<TeacherAddSubject></TeacherAddSubject>}></Route>
                    <Route path='/teacherAddTasks/:code' element={<TeacherAddTasks></TeacherAddTasks>}></Route>
                    <Route path='/teacherCourseDetails/:code' element={<TeacherCourseDetails></TeacherCourseDetails>}></Route>
                    <Route path='/help' element={<Help></Help>}></Route>

                <Route element={<Layout></Layout>}>
                    <Route path='/course' element={<CourseList></CourseList>}></Route>
                    <Route path='/course/:code' element={<CourseDetails></CourseDetails>}>
                        <Route path='tasks' element={<CourseTasks></CourseTasks>} />
                    </Route>
                    <Route path='/teachers' element={<Teachers></Teachers>}></Route>
                    
                </Route>
                
                    <Route path='*' element={<NotFound></NotFound>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App