import React, { Component } from 'react'

import '../styles/square-grid.css'
import '../styles/square.css'
import '../styles/button-grid.css'
import '../styles/button.css'

class SquareGrid extends Component {
    constructor() {
        super()

        this.state = {
            sqrA: 'white',
            sqrB: 'white',
            sqrC: 'white',
            sqrD: 'white',
            color: '',
            colors: []
        }

        this.makeBlack = this.makeBlack.bind(this)
    }

    makeBlack = () => {
        if(this.state.sqrA !== '#222f3e'){
            this.setState({
                sqrA: '#222f3e',
                sqrB: '#222f3e',
                sqrC: '#222f3e',
                sqrD: '#222f3e'
            })
        } else {
            this.setState({
                sqrA: 'white',
                sqrB: 'white',
                sqrC: 'white',
                sqrD: 'white'
            })
        }
    }

    makePurple = () => {
        this.setState({
            sqrA: '#5f27cd',
            sqrB: '#5f27cd'
        })
    }

    makeBottomLeftBlue = () => {
        this.setState({sqrC: '#54a0ff'})
    }

    makeBottomRightBlue = () => {
        this.setState({sqrD: '#54a0ff'})
    }

    topLeft = () => {
        this.setState({sqrA: '#ee5253'})
    }

    topRight = () => {
        this.setState({sqrB: '#00d2d3'})
    }

    bottomLeft = () => {
        this.setState({sqrC: '#10ac84'})
    }

    bottomRight = () => {
        this.setState({sqrD: '#feca57'})
    }

    handleChange = e => {
        this.setState({color: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState(prevState => {
            console.log(prevState.color)
            return {
                colors: [prevState.color,...prevState.colors]
            }
        }, () => {
            console.log(this.state.colors)
            
        })
        
    }

    runColors = () => {
        this.intervalId = setInterval(this.startColors, 1000)
    }

    startColors = () => {
        let a = Math.floor(Math.random() * this.state.colors.length)
        let b = Math.floor(Math.random() * this.state.colors.length)
        let c = Math.floor(Math.random() * this.state.colors.length)
        let d = Math.floor(Math.random() * this.state.colors.length)

        this.setState({
            sqrA: this.state.colors[a],
            sqrB: this.state.colors[b],
            sqrC: this.state.colors[c],
            sqrD: this.state.colors[d]
        })
    }

    stopColors = () => {
        clearInterval(this.intervalId)
    }

    runReset = () => {
        this.setState({colors: []})
    }

    render() {
        const styles = {
            sqrA: {
                backgroundColor: this.state.sqrA
            },
            sqrB: {
                backgroundColor: this.state.sqrB
            },
            sqrC: {
                backgroundColor: this.state.sqrC
            },
            sqrD: {
                backgroundColor: this.state.sqrD
            }
        }

        return (
            <div>
                <div className='square-grid'>
                    <div className='square-single sqrA' style={styles.sqrA}></div>
                    <div className='square-single sqrA' style={styles.sqrB}></div>
                    <div className='square-single sqrA' style={styles.sqrC}></div>
                    <div className='square-single sqrA' style={styles.sqrD}></div>
                </div>
                <div className='button-grid'>
                    <button className="btn" onClick={this.makeBlack}>black</button>
                    <button className="btn" onClick={this.makePurple}>purple</button>
                    <button className="btn" onClick={this.makeBottomLeftBlue}>blue</button>
                    <button className="btn" onClick={this.makeBottomRightBlue}>blue</button>
                    <button className="btn" onClick={this.topLeft}>red</button>
                    <button className="btn" onClick={this.topRight}>aqua</button>
                    <button className="btn" onClick={this.bottomLeft}>green</button>
                    <button className="btn" onClick={this.bottomRight}>yellow</button>
                </div>
                <div className='custom-grid'>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name='color' placeholder='enter color' value={this.state.color} onChange={this.handleChange}/>
                        <button>submit</button>
                    </form>
                    <button onClick={this.runColors}>Start Colors</button>
                    <button onClick={this.stopColors}>Stop Colors</button>
                    <button onClick={this.runReset}>Reset</button>
                </div>
            </div>
        )
    }


}

export default SquareGrid
