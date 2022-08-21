import React, { useContext } from "react";
import { ThemeContext } from "./Context";



const Page = () => {
    const { themes, handleToggle } = useContext(ThemeContext)

    return (
        <div style={{ background: themes.background, color: themes.textColor }}>
            Hello
            <button onClick={handleToggle}>Изменить тему</button>
        </div>
    )
}

export default Page