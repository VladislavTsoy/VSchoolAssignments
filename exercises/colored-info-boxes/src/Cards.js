import React from 'react'
import './cards.css'

const Card = (props) => {
    const styles = {
        cardContainer: {
            height: '320px',
            width: '300px'
        }
    }

    return (
        <div className="card small" style={styles.cardContainer}>
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={props.image} />
            </div>

            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{props.name}<i class="material-icons right">more_vert</i></span>
                <p><a href={props.source}>Career Stats</a></p>
            </div>

            <div className="card-reveal">
                <span class="card-title grey-text text-darken-4">{props.name}<i class="material-icons right">close</i></span>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Card