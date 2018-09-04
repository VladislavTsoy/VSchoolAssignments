import React from 'react'
import Navbar from './Navbar'
import PostList from './PostList'
import Form from './Form'
import '../styles.css'

const App = () => {
    return (
        <div className="main-container">   
            <div className="post-list-container">
                <PostList />
            </div>
            
            <div className="navbar-container">
                <Navbar />
            </div>
        </div>
    )
}

export default App

