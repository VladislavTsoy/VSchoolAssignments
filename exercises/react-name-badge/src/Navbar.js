import React from 'react'
import { Link } from 'react-router-dom'
import logo from './imgs/hello.jpg'

const Navbar = props => {
    return (
        <div className="nav-container">
            <div className='main-nav'>
            
                <div className="main-nav-left">
                    <img src={logo} alt=""/>
                </div>

                <div className="main-nav-right">
                    <nav>
                        <ul className="main-navbar-right">
                            <Link to="/">Home</Link>
                            <Link to="/form">Form</Link>
                        </ul>
                    </nav>
                </div>



            </div>
        </div>
    )
}

export default Navbar