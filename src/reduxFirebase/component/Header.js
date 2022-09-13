import { Link } from 'react-router-dom'
import React from 'react'
import CustomLink from './CustomLink'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { logoutInitiate } from '../redux/Actions';
import '../Style.css'

const Header = () => {
    const user = useSelector(state => state.currentUser)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOut = () => {
        if (user) {
            return dispatch(logoutInitiate())
        }
        setTimeout(() => {
            navigate('/login')
        }, 2000);
    }
    return (
        <div className='header'>
            <Link to={'/'} className={'logo'}>
                <p className={'logo'}>
                    Contact App
                </p>
            </Link>
            <div className='header-right'>
                <CustomLink to={'/'}>Home</CustomLink>
                <CustomLink to={'/contact'}>Add contact</CustomLink>
                <CustomLink to={'/about'}>About</CustomLink>
                <CustomLink to={'register'}>Sign Up</CustomLink>

                {user ? (
                    <p style={{ cursor: 'pointer' }} onClick={handleOut}>
                        Sign Out</p>
                ) : (
                    <CustomLink to={'/login'}>
                        Sign in
                    </CustomLink>
                )
                }
            </div>
        </div>
    )
}

export default Header