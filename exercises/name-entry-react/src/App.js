import React, { Component } from 'react';

class App extends Component {
    constructor(){
        super()

        this.state = {
            name: '',
            nameArr: []
        }
    }

    handleChange = e => {
        this.setState({name: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        // this.state.nameArr.push(this.state.name)
        this.setState(prevState => {
            return {
                names: [...prevState.names, prevState.myName]
            }
        })
    }

    render() {
        const displayNames = this.state.nameArr.map((name, i) => {
            return <li key={name + i}>{name}</li>
        })

        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name='name' value={this.state.name} placeholder="first name" onChange={this.handleChange}/>
                <button>Submit</button>
                <h1>Name: {this.state.name}</h1>
                {displayNames}
            </form>
        );
    }
}

export default App;