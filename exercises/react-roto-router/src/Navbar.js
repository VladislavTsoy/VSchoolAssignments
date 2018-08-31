import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <div className="nav-main">
            <ul>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/service">Service</Link>
            </ul>
        </div>
    )
}

export default Navbar