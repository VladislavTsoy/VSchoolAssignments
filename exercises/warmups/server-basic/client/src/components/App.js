import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {
    constructor() {
        super()
        this.state = {
            teamsArr: [],
            name: '',
            location: ''
        }
    }
    componentDidMount() {
        axios.get('/teams').then(res => {
            console.log(res.data)
            this.setState({teamsArr: [...res.data]})
        })
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({[name]: value})
    }

    handleSubmit = e => {
        let temp = {
            team: this.state.name, 
            location: this.state.location
        }
        console.log(temp)

        axios.post('/teams', temp).then(res => {
            console.log(res.data)
            this.setState({teamsArr: [res.data]})
        })
    }

    render() {
        return (
            <div>


                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="location" value={this.state.location} onChange={this.handleChange} placeholder="enter team location"/>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="enter team name"/>
                    <button>Submit team</button>
                </form>


                {this.state.teamsArr.map(team => {
                    return  <h4 key={team.team}>{team.location} {team.team}</h4>
                })}
            </div>
        );
    }
}

export default App;