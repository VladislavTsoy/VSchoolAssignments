import React from 'react'

const Pet = (props) => {
    return (
        <div>
            <p>pet name: {props.name}</p>
            <p>breed: {props.breed}</p>
        </div>
    )
}

export default Pet