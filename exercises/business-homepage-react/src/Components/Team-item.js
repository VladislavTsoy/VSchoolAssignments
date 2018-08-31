import React from 'react'
import '../Styles/item-box.css'

const TeamItem = (props) => {
    return (
        <div className='item-box'>
            <div className='headshot'>
                <img src={props.headshot} alt='upgrade yopur browser, dude.'/>   
            </div>
            <div className='names'>{props.names}</div>
            <div className='description'>{props.description}</div>
        </div>
    )
}

export default TeamItem