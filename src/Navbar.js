import React from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex bg-gray-300 justify-between">
        <h1 className='px-10 py-5'>Navbar</h1>
        <ul className='flex'>
            <li><NavLink to={"#"}>What's New</NavLink></li>
            <li><NavLink to={"#"}>About me</NavLink></li>
        </ul>
    </nav>

  )
}

export default Navbar