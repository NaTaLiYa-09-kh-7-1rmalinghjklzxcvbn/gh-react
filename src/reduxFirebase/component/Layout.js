import { Outlet } from 'react-router-dom'
import React from 'react'
import Header from './Header'


const Layout = () => {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout