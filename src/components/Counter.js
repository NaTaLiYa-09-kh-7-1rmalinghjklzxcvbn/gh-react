import { useState, useEffect } from 'react';

const Counter = function () {
    const [likes, setLikes] = useState(0);
    const [timer, setTimer] = useState(0);

    const dicrement = () => {

        setLikes(likes - 1)
    };

    const increment = (() => {
        setLikes(likes + 1)
    })

    useEffect(() => {
        const secundomer = setInterval(() => {

            setTimer(timer + 1)
        }, 1000)
        return () => {
            clearInterval(secundomer)
        };
    }, []);

    return (
        <div className='counter'>
            <h1 className='likes'>{likes}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={dicrement}>dicrement</button>
            <div className='timer'>{timer}</div>
        </div >
    )
}

export default Counter;