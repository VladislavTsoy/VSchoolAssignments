import React, { Component } from 'react';
import Badge from './Badge'
import './badges.css'

class Form extends Component {
    constructor() {
        super()
        
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            placeOfBirth: "",
            favoriteFood: "",
            about: "",
            badgesArr: [],
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        let newObj = {
            first: this.state.firstName,
            last: this.state.lastName,
            email: this.state.email,
            phone: this.state.phone,
            birth: this.state.placeOfBirth,
            food: this.state.favoriteFood,
            about: this.state.about
        }
        this.setState(prevState => ({badgesArr: [...prevState.badgesArr, newObj],
                                    firstName: '',
                                    lastName: '',
                                    email: '',
                                    phone: '',
                                    placeOfBirth: '',
                                    favoriteFood: '',
                                    about: ''
                                 }))
    }

    validateNumber = num => {
        
    }

    render() {
        const displayBadges = this.state.badgesArr.map((person, i) => {
            return <Badge first={person.first}
                            last={person.last}
                            email={person.email}
                            phone={person.phone}
                            birth={person.birth}
                            food={person.food}
                            about={person.about}
                            color={this.state.red}
                            index={i}  />
        })

        return (
            <div className="everything-wrapper">
                <div className="form-container">
                    <form className="main-form" onSubmit={this.handleSubmit}>
                        <div className="form-top">
                            <div className="form-top-left">
                                <input type="text" placeholder="First Name" name="firstName" value={this.state.firstName} onChange={this.handleChange} required/>
                                <input type="text" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} required/>
                                <input type="text" placeholder="Phone" name="phone" value={this.state.phone} onChange={this.handleChange} required/>
                            </div>

                            <div className="form-top-right">
                                <input type="text" placeholder="Last Name" name="lastName" value={this.state.lastName} onChange={this.handleChange} required/>
                                <input type="text" placeholder="Place of Birth" name="placeOfBirth" value={this.state.placeOfBirth} onChange={this.handleChange} required/>
                                <input type="text" placeholder="Favorite Food" name="favoriteFood" value={this.state.favoriteFood} onChange={this.handleChange} required/>
                            </div>
                        </div>
                        <div className="form-bottom"> 
                            <input type="textarea" placeholder="Tell us about yourself" name="about" value={this.state.about} onChange={this.handleChange} required/>
                            <button>Submit</button>
                        </div>
                    </form>
                    
                </div>

                {displayBadges}
            </div>
        );
    }
}

export default Form;