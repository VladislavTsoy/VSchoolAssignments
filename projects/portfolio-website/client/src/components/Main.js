import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
// components 
import Contact from './Contact'
import Projects from './Projects'
import About from './About'

class Main extends Component {

    handleBackground = () => {

    }

    render() {
        return (
            <div id="main-display">
                <Switch>    
                    <Route exact path="/" component={ Projects } />
                    <Route exact path="/about" component={ About } />
                    <Route exact path="/contact" component={ Contact } />
                </Switch>
            </div>
        );
    }
}

export default Main;