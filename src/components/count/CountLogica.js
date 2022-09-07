import React, { useState } from "react";
import Count from "./Count";
import IsFive from "./IsFive";



const CounterLogica = () => {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

    return (
        <div style={{ textAlign: 'center', margin: '10%' }}>
            <h5>Счетчик 1:</h5>
            <div style={{ margin: '10%' }}>
                <button style={{ padding: '10%', background: 'yellow' }}
                    onClick={() => setCount1(count1 + 1)}>
                    +
                </button>
                <Count id={1} value={count1} />
            </div>
            <h5>Счетчик 2:</h5>
            <div style={{ margin: '10%' }}>
                <button style={{ padding: '10%', background: 'yellow' }}
                    onClick={() => setCount2(count2 + 1)}>
                    +
                </button>
                <Count id={2} value={count2} />
                <IsFive value={count2} />
            </div>
        </div>
    )
}

export default CounterLogica
