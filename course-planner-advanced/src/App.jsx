import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CourseList, CourseDetails, CourseTasks, Help } from './pages'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/course' element={<CourseList></CourseList>}></Route>
                <Route path='/course/:code' element={<CourseDetails></CourseDetails>}>
                    <Route path='tasks' element={<CourseTasks></CourseTasks>} />
                </Route>
                <Route path='/help' element={<Help></Help>}></Route>
                
            </Routes>
        </BrowserRouter>
    )
}

export default App