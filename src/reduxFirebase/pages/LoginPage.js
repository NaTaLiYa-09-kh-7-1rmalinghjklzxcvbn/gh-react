import React, { useState, useEffect } from 'react'
import { loginInitiate } from '../Actions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()
    const user = useSelector(state => state.currentUser);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [navigate, user]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            return;
        }
        dispatch(loginInitiate(email, password))
        setEmail('')
        setPassword('')
    }

    const changPage = () => {
        navigate('/register')
    }

    return (
        <div style={{ margin: '5%' }}>
            <h1 style={{ textAlign: 'center' }}>LOGIN</h1>
            <form
                style={{
                    display: 'flex', width: '50%',
                    flexDirection: 'column',
                    margin: '10%'
                }}
                onSubmit={handleSubmit}>
                <input
                    style={{ margin: '10px', padding: '10px', background: 'lightBlue' }}
                    value={email} onChange={(e) => setEmail(e.target.value)} />
                <input
                    style={{ margin: '10px', padding: '10px', background: 'lightBlue' }}
                    type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button
                    style={{ margin: '10px', width: '50%', padding: '15px', background: 'pink' }}
                    type='submit'>SIGN IN</button>
            </form>
            <div style={{ width: '40%', display: 'flex', flexDirection: 'column', margin: '20px' }}>
                <button
                    style={{ marginBottom: '20px', padding: '10px', background: 'pink' }}
                    onClick={changPage}>Registration
                </button>
                <Link to={'/'}
                    style={{ border: '2px solid', padding: '2%', }}>
                    HOME PAGE
                </Link>
            </div>
        </div>
    )
}

export default LoginPage