import React from 'react'

const SuperHero = (props) => {

    const style = {
        card: {
            height: '250px',
            width: '250px',
            margin: '20px',
            display: 'inline-block'
        },

        title: {
            fontFamily: 'sans-serif',
            fontWeight: '800'
        }
        
    }
    return (
        <div className="card" style={style.card}>
            <div className="card-image">
                <button onClick={props.phrase}><img src={props.image} alt='update'/></button>
                <span className="card-title" style={style.title}>{props.name}</span>
            </div>
        </div>
    )
}

export default SuperHero