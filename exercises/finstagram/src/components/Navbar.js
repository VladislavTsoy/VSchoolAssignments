import React, { Component } from 'react'
import Form from './Form'
import plus from '../images/plus.svg'

class Navbar extends Component {
    constructor() {
        super()

        this.state = {
            status: true
        }
    }

    openForm = () => {
        this.setState(prevState => { 
            return {
                status: !prevState.status 
            }
        })
    }


    render() {
        const norm = {
            transition: "all .3s ease-in-out"
        }
        
        const roll = {
            transform: "rotate(45deg)",
            transition: "transform .3s ease-in-out"
        }

        const dis = {

        }

        const appear = {
            opacity: "1",
            transition: "all .3s ease-in-out"
        }
        return (
            <div className='btn-add'>   
                <a onClick={this.openForm}>
                    {
                        this.state.status ? 
                        <img src={plus} style={norm} alt=""/>
                        :
                        <img src={plus} style={roll} alt=""/>
                    }
                </a>
                {this.state.status ? 
                    <div></div>
                    :
                    <div>   
                        <div className="fade-background">
                        </div>    
                        <div className="form-wrapper" style={appear}>
                            <h2>NEW POST:</h2>
                            <Form handleClick={this.openForm}/>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default Navbar