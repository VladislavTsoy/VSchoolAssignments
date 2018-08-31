import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Service from './Service'
import Footer from './Footer'
import './styles.css'

const App = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route path="/about" component={ About } />
                <Route path="/service" component={ Service } />
            </Switch>
            <Footer />
        </div>
    )
}

export default App