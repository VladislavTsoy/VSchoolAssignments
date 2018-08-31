import React from 'react';
import { connect } from 'react-redux'
import { startTime, stopTime, resetTime } from '../redux'

const Controller = props => {
    let clearId
    let flag = true
   
    const handleStart = () => {
        clearId = setInterval(props.startTime, 10)
        if(flag) {
            flag = false
        }
    }

    const handleStop = () => {
        clearInterval(clearId)
        if(!flag){
            flag = true
        }
    }

    const handleReset = () => {
        props.resetTime()
    }

    return (
        <div className="buttons-container">
            <button onClick={handleStart}>START</button>
            <button onClick={handleStop}>STOP</button>
            <button onClick={handleReset}>RESET</button>
        </div>
    );
};

export default connect(null, { startTime, stopTime, resetTime })(Controller)