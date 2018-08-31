import React, { Component } from 'react';
import axios from 'axios'
import Item from './Item'

class CardContainer extends Component {
    constructor() {
        super()

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios.get('http://api.vschool.io:6543/hitlist.json').then(res => {
            this.setState({data: res.data})
        }).catch(err => console.log(err))
    }

    render() {
        const display = this.state.data.map((person, i)=> {
            return <Item 
                    key={person.name + i}
                    {...person}/>
        })

        return (
            <div className="card-container">
                {display}
            </div>
        )
    }
}

export default CardContainer;