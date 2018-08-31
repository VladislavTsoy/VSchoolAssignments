import React from 'react';
import { connect } from 'react-redux'

const View = props => {
    return (
        <div className="timer-container">
            <h1>{props.hours} : {props.minutes} : {props.seconds} : {props.milliseconds}</h1>
        </div>
    );
};

export default connect(state => state, {})(View)