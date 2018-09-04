import React, {Component} from 'react';
import { connect } from 'react-redux'
import { startTime, stopTime, resetTime } from '../redux'

let clearId;

class Controller extends Component {
    constructor(){
        super()

        this.state = {
            flag: true
        }
    }
   
    handleStart = () => {
        clearId = setInterval(this.props.startTime, 10)
        this.handleBtn()
    }

    handleStop = () => {
        clearInterval(clearId)  
        this.handleBtn()
    }

    handleReset = () => {
        this.props.resetTime()
    }

    handleBtn = () => {
        this.setState(prevState => {
            return {
                flag: !prevState.flag
            }
        })
    }

    render(){
        return (
            <div className="buttons-container">
                {this.state.flag ? 
                <button onClick={this.handleStart}>START</button>
                :
                <button onClick={this.handleStop}>STOP</button>
                }
                <button onClick={this.handleReset}>RESET</button>
            </div>
        );
    }
};

export default connect(null, { startTime, stopTime, resetTime })(Controller)