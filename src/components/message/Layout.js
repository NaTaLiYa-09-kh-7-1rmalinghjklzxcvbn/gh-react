import { Outlet } from 'react-router-dom'
import CustomLink from './CustomLink'

const Layout = () => {

    return (
        <div>
            <header>
                <CustomLink to={'/'}>Главная</CustomLink>
                <CustomLink to={'/about'}>обо мне</CustomLink>
                <CustomLink to={'/list'}>blog</CustomLink>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <h1>Подвал сайта</h1>
            </footer>
        </div>
    )
}
export default Layout