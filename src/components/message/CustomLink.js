import React from "react";
import { Link, useMatch } from 'react-router-dom';
//import useMatch from 'react'

const CustomLink = ({ children, to, ...props }) => {
    const match = useMatch(to)
    return (
        <Link to={to} style={{ color: match ? 'red' : 'blue' }} {...props}>
            {children}
        </Link>
    )
}
export default CustomLink