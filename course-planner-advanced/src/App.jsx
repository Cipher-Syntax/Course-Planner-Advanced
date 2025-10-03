import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, CourseList, CourseDetails, CourseTasks, Help, Teachers } from './pages'
import { getCourses, saveCourses } from './utils/storage'
import { CourseData } from './data/CourseData'

const App = () => {
    if(getCourses().length === 0){
        saveCourses(CourseData)
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