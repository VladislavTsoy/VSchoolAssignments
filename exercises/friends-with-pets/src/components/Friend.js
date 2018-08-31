import React from 'react'
import Pet from './Pet'

const Friend = (props) => {
    const displayPets = props.pets.map((pet, i) => {
        return <Pet key={pet.name + i}
                    name={pet.name}
                    breed={pet.breed}/>
    })

    return (
        <div class="row">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">{props.name} is {props.age} years old.</span>
              <p>{displayPets}</p>
            </div>
          </div>
        </div>
      </div>
    )

}

export default Friend