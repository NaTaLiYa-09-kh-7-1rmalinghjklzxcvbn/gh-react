import { registerInitiate } from "../Actions";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [displayName, setDisplayName] = useState('');
    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== passwordConfirm) {
            return;
        }
        dispatch(registerInitiate(email, password, displayName))
        setEmail('')
        setPassword('')
        setPasswordConfirm('')
        setDisplayName('')
    }


    return (
        <div>
            <header style={{ margin: '5%' }}>
                <Link style={{ border: '2px solid', padding: '2%' }}
                    to={'/login'}>
                    SIGN IN
                </Link>
            </header>
            <h1 style={{ textAlign: 'center' }}>REGISTER</h1>
            <form
                style={{
                    display: 'flex', width: '40%',
                    flexDirection: 'column',
                    margin: '15%'
                }}
                onSubmit={handleSubmit}>
                <input style={{ margin: '10px', padding: '10px', background: 'lightBlue' }}
                    value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
                <input style={{ margin: '10px', padding: '10px', background: 'lightBlue' }}
                    value={email} onChange={(e) => setEmail(e.target.value)} />
                <input style={{ margin: '10px', padding: '10px', background: 'lightBlue' }}
                    type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <input style={{ margin: '10px', padding: '10px', background: 'lightBlue' }}
                    type='password' value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
                <button style={{ margin: '20px', width: '50%', padding: '15px', background: 'pink' }}
                    type='submit'>SIGN UP</button>
            </form>
            <Link to={'/'}
                style={{ border: '2px solid', padding: '2%', margin: '5%' }}>
                HOME PAGE
            </Link>
        </div>
    )
}

export default RegisterPage