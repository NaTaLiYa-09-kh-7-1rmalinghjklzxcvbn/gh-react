import React, { useMemo } from "react";

const render = {
    count1: 0,
    count2: 0,
}


const Count = React.memo(({ id, value }) => {

    console.warn(`Count${id} render:${++render[`count${id}`]}`)
    return (
        <div>
            <h1 className='count'>{value}</h1>
        </div>
    )

})
export default Count