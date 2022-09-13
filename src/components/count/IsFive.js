import React, { useMemo, useContext } from "react";

let renderCount = 0;


const IsFive = React.memo(({ value }) => {
    console.warn(`IsFive render: ${++renderCount}`)

    const getResult = useMemo(() => {
        let i = 0;
        while (i < 60000) i++;
        return value === 5 ? `Это 5 :) ` : 'Это не пять :('
    }, [value])

    return (
        <div>
            <h2>{getResult}</h2>
        </div>
    )
}, (nextProps) => {
    return nextProps.value === 5
}

)


export default IsFive;