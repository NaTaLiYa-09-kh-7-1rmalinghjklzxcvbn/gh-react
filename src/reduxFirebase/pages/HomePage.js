import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { logoutInitiate } from '../Actions';

const HomePage = () => {
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
        <div style={{ margin: '5%' }}>
            <h1 style={{ textAlign: 'center' }}>HOME PAGE</h1>
            <button
                style={{ margin: '20px', width: '50%', padding: '10px', background: 'pink' }}
                onClick={handleOut}>Выход</button>
        </div>
    )
}

export default HomePage