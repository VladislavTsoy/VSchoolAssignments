import React from 'react'
import '../styles/navbar.css'

const Navbar = () => {
    return (
        <div class='header-nav'>
            <div class='logo'>
                <h3><a href="">Start Bootstrap</a></h3>
            </div>
            
            <nav class='main-nav'>
                <ul>
                    <li><a href="">HOME</a></li>
                    <li><a href="">ABOUT</a></li>
                    <li><a href="">SAMPLE POST</a></li>
                    <li><a href="">CONTACT</a></li>
                </ul>
            </nav>
            
        </div>
        
    )
}

export default Navbar