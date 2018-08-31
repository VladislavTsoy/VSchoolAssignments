import React from 'react'

const Card = (props) => {

    const timeOfYear = time => {
        switch(time) {
            case 'Spring':
                return '#55efc4'
            case 'Summer':
                return '#fab1a0'
            case 'Fall': 
                return '#e17055'
            case 'Winter':
                return '#74b9ff'
            default: 
                return '#fff'
        }
    }
    const style = {
        width: '200px',
        height: "300px",
        backgroundColor: timeOfYear(props.time)
    }

    const imgStyle = {
        height: "200px",
        width: "200px",
        background: "linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.8))"
    }

    const priceRate = price => {
        if(price < 500){
            return '$'
        } else if(price >= 500 && price < 1000){
            return '$$'
        } else {
            return '$$$'
        }
    }

    return (
        <div className="row">
        <div className="col s12 m7">
          <div className="card" style={style}>
            <div className="card-image">
              <img src={props.image} style={imgStyle} alt="update your browser"/>
              <span className="card-title">{props.location}</span>
            </div>
            <div className="card-content">
              <p>{priceRate(props.price)} {props.price} </p>
              <p>best time to go: {props.time} </p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Card