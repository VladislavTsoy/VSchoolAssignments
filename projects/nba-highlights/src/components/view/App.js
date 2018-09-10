import React from 'react';
import { Switch, Route } from 'react-router-dom'
import News from './News'
import Teams from './Teams'
import Players from './Players'
import Navbar from '../controller/Navbar'


const App = () => {
    return (
        <div>
            <Navbar />
            <div className="main-content-container">
                <Switch>
                    <Route exact path="/" component={ News }/>
                    <Route path="/teams" component={ Teams }/>
                    <Route path="/players" component={ Players }/>
                </Switch>
            </div>
        </div>
    );
};

export default App;