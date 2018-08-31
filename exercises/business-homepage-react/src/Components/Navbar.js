import React from 'react'
import SearchBar from './SearchBar'
import '../Styles/navbar.css'

const Navbar = () => {
    return (
        <div className='main-nav'>
            <nav className='navBar'>
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>How it works</a></li>
                    <li><a href='#'>Contacts</a></li>
                    <li><a href='#'>Careers</a></li>    
                </ul>
            </nav>
            <div class='hero-text-box'>
                <h1>Search it.</h1>
                <SearchBar />
            </div> 
        </div>
    )
}

export default Navbar