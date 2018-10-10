import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div id="main-nav-container">
            <p id="logo">"V - T"</p>
            <div className="social-links">   
                <i class="fab fa-github" onClick={() => window.open(`https://github.com/VladislavTsoy`)}></i>
                <i class="fab fa-linkedin-in" onClick={() => window.open(`https://www.linkedin.com/in/vladislavtsoyru/`)}></i>
                <i class="fab fa-instagram" onClick={() => window.open(`https://www.instagram.com/vladislavtsoy/`)}></i>
            </div>
            <nav id="main-nav">
                <Link to='/'>Projects</Link>
                <Link to='/About'>About</Link>
                <Link to='/Contact'>Contact</Link>
            </nav>
        </div>
    );
};

export default Navbar;