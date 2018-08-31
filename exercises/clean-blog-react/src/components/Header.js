import React from 'react'
import Navbar from './Navbar'
import '../styles/header.css'

const Header = () => {
    return (
        <div>
            <div class='header-container'>
                <Navbar class='nav'/>
                <div class='hero-text-box'>
                    <h1>Clean Blog</h1>
                    <h6>A blog Theme By Start Boostrap</h6>
                </div>
            </div>
        </div>
    )
}

export default Header