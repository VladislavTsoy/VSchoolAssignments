import React, { Component } from 'react';
// stylesheet
import './styles/style.css'
import './styles/queries.css'

// components
import Navbar from './components/Navbar'
import Main from './components/Main'

class App extends Component {
    render() {
        return (
            <div id="spa-container">
                <p id="copyright">"&copy; 2017 - 2018"</p>
                <Navbar />
                <Main />
            </div> 
        );
    }
}

export default App;