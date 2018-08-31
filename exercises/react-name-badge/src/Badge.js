import React from 'react';
import './badges.css'

const Badge = props => {
    
    return (
        <div className="badge-container">

            <div className="badge-heading" style={
                (props.index % 2 === 0) ? {backgroundColor: '#ff7675'} : {backgroundColor: '#0984e3'}
            }>
                <h6>Badge:</h6>
            </div>
            <div className="badge-top">
                <div className="badge-top-left">
                    <h6>Name: {props.first} {props.last}</h6>
                    <h6>Place of Birth: {props.birth}</h6>
                    <h6>Email: {props.email}</h6>
                </div>
                <div className="badge-top-right">
                    <h6>Phone: {props.phone}</h6>
                    <h6>Favorite food: {props.food}</h6>
                </div>
            </div>

            <div className="badge-bottom">
                <p>{props.about}</p>
            </div>

        </div>
    )
    
}

export default Badge;