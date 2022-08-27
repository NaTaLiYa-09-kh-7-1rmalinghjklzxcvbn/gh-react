import React from "react";
import { useDispatch, useSelector } from "react-redux";



const CountRedux = () => {
    const count = useSelector(state => state.count)
    console.log(count);
    const dispatch = useDispatch();
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            padding: '10%',
            border: '2px solid'
        }}>

            <button style={{ padding: '15px', background: 'blue', fontSize: '25px' }}
                onClick={() => dispatch({ type: 'plus' })}>+</button>
            <h1>{count}</h1>
            <button style={{ padding: '15px', background: 'blue', fontSize: '25px' }}
                onClick={() => dispatch({ type: 'minus' })}>-</button>
        </div>
    )
}

export default CountRedux