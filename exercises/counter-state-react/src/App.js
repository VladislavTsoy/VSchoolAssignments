import React, { Component } from 'react'

class App extends Component {
    constructor(){
        super()

        this.state = {
            counter: 0
        }
    }

    addBtn = () => this.setState(prevState => {
        return{
            counter: prevState.counter + 1
        }
    })

    minusBtn = () => this.setState(prevState => {
        return {
            counter: prevState.counter - 1
        }
    })

    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.addBtn}>+</button>
                <button onClick={this.minusBtn}>-</button>
            </div>
        )
    }
}

export default App