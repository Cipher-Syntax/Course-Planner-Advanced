import React from 'react'
import { CourseList} from '../pages'
import { Filtering, HeroSection } from '../components'

const Home = () => {
    return (
        <>
            <Header></Header>
            <HeroSection></HeroSection>
            <Filtering></Filtering>
            <CourseList></CourseList>
        </>
    )
}

export default Home