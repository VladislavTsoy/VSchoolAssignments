import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <nav className="footer-main">
            <ul>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/service">Service</Link>
            </ul>
        </nav>
    )   
}

export default Footer 