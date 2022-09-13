import { Route, Routes } from "react-router-dom"
import NotFoundPage from "../pages/NotFoundPage"
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from "../pages/RegisterPage"
import AboutPage from '../pages/AboutPage'
import Layout from "./Layout"
import ProtectedRoutes from "./ProtectedRoutes"
import AddContactPage from '../pages/AddContactPage'
import View from "../pages/View"

function PathPages() {
    return (
        <Routes>
            <Route path={'/'} element={<Layout />}>
                <Route path='/' element={<HomePage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path={'/contact'} element={<ProtectedRoutes>
                    <AddContactPage />
                </ProtectedRoutes>} />
                <Route
                    path={"/view/:id"}
                    element={
                        <ProtectedRoutes>
                            <View />
                        </ProtectedRoutes>
                    }
                />
                <Route
                    path={"/update/:id"}
                    element={
                        <ProtectedRoutes>
                            <AddContactPage />
                        </ProtectedRoutes>
                    }
                />
                <Route path='/about' element={<AboutPage />} />
                <Route path={'/register'} element={< RegisterPage />} />
                <Route path={'*'} elemenr={<NotFoundPage />} />
            </Route>
        </Routes>
    )
}

export default PathPages