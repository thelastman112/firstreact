import React from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {  
    return (
        <nav className="flex bg-gray-300 justify-between px-8">
            <h1 className=' py-5'>Navbar</h1>
            <ul className='flex py-5'>
                <li className=''><NavLink to={"/Login"}>What's New</NavLink></li>
                <li className='px-3'><NavLink to={"/Login"}>About me</NavLink></li>
                <li className=''><NavLink to={"/Login"}>Profile</NavLink></li>
            </ul>
        </nav>

    )
}

export default Navbar