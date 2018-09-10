import React, { Component } from 'react';
import { Link } from 'react-router-dom' 
import logo from '../../images/nba-logo.jpg'
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu';

class Navbar extends Component {
    constructor() {
        super()

        this.state = {
            toggle: true
        }
    }


    handleNav = () => {
        this.state.toggle ? this.setState({toggle: false}) : this.setState({toggle: true})
        console.log(this.state.toggle)
    }

    render() {
        return (
            <div className="main-nav-wrapper">
                <div className="main-nav">
                    <div className="main-nav-logo">
                        <Link to="/"><img src={logo} alt=""/> </Link>
                    </div>
    
                    <div className="main-nav-links">
                        <div className="responsive-menu">
                            <Button color="secondary" ><MenuIcon /></Button>
                        </div>
                        <ul className="visible-links" id="alinks" onClick={this.handleNav} style={this.state.toggle? {display: "block"} : {display: "none"}}>
                            <li><Link to="/">News</Link></li>
                            <li><Link to="/teams">Teams</Link></li>
                            <li><Link to="players">Players</Link></li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        );
    }
};

export default Navbar;