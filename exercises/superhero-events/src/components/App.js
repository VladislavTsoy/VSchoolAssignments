import React, { Component } from 'react'
import SuperHero from './SuperHero'

class App extends Component {
    superheroesArray = [
        {
            name: 'Iron-Man',
            imgUrl: 'https://allaboutheroes.com/wp-content/uploads/2018/02/61fvTUi7t+L.jpg',
            phrase: () => alert('I am Iron-Man!')
        },
        {
            name: 'Spider-Man',
            imgUrl: 'http://nerdreactor.com/wp-content/uploads/2017/07/Spider-Mans-Spider-sense-500x500_c.jpg',
            phrase: () => alert("I'm your friendly neighborhood Spider-Man!")
        },
        {
            name: 'Black Panther',
            imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/51KoNT9i8HL.jpg',
            phrase: ()=> alert("Wakanda forever!")
        },
        {
            name: 'The Hulk',
            imgUrl: 'https://allaboutheroes.com/wp-content/uploads/2018/02/61jqr0+K8TL.jpg',
            phrase: () => alert("HULK SMASH!")
        },
        {
            name: 'Wolverine',
            imgUrl: 'http://cdn.shopify.com/s/files/1/0727/1263/products/18_20110509080542103_f2ed2bdb-10bc-4a3b-bd21-9a038d329f2a_grande.jpeg?v=1519331420',
            phrase: () => alert("hmm...")
        }
    ]

    displayHero = this.superheroesArray.map((hero, i) => <SuperHero key={hero.name + i}
                                                                    name={hero.name}
                                                                    image={hero.imgUrl}
                                                                    phrase={hero.phrase}/>)

    render() {
        return (
            <div>
                {this.displayHero}
            </div>
        )
    }
}

export default App