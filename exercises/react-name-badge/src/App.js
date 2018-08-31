import React from 'react'
import Navbar from './Navbar'
import Form from './Form'
import Footer from './Footer'
import Home from './Home'
import './styles.css'
import { Switch, Route } from 'react-router-dom'

const App = props => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route path="/form" component={ Form } />
            </Switch>
            <Footer />
        </div>
    )
}

export default App
