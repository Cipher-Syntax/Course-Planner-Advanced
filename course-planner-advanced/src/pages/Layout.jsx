import React from 'react'
import { Footer, Header } from '../components'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>

            <main>
                <Outlet></Outlet>
            </main>
            
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    )
}

export default Layout
