import { Route, Routes } from "react-router-dom"
import NotFoundPage from "./pages/NotFoundPage"
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from "./pages/RegisterPage"


function PathPages() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path={'/register'} element={< RegisterPage />} />
            <Route path={'*'} elemenr={<NotFoundPage />} />
        </Routes>
    )
}

export default PathPages