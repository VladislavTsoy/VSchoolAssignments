import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div id="main-nav-container">
            <p id="logo">"V - T"</p>
            <nav id="main-nav">
                <Link to='/'>Projects</Link>
                <Link to='/About'>About</Link>
                <Link to='/Contact'>Contact</Link>
            </nav>
        </div>
    );
};

export default Navbar;