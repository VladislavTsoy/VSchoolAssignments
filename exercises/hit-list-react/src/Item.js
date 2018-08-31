import React, { Component } from 'react'
import axios from 'axios'

class Item extends Component {
    constructor() {
        super()

        this.state = {
            color: ''
        }
    }
    componentDidMount() {
        axios.get('http://www.colr.org/json/color/random').then(res => {
            this.setState({color: '#' + res.data.colors[0].hex})
        }).catch(err => console.log(err))
    }
  
    
    render(){
        const styles = {
            height: '200px',
            width: '150px',
            background: `url( ${this.props.image} )`,
            backgroundSize: 'cover',
            backgroundPosition: "center center"
        }

        const title = {
             boxShadow: `0 10px 10px ${this.state.color}, 0 6px 6px ${this.state.color}, 0 5px 5px ${this.state.color}`
        }

        return (
            <div className="card" style={title}>
                <div className='image' style={styles}></div>
                <div className="card-title">
                    <h5> {this.props.name} </h5>
                </div>
            </div>
        )
    }
}


export default Item;