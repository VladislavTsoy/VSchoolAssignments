import React, { Component } from 'react';
import { connect } from 'react-redux'
import { newPost } from '../redux'

class Form extends Component {
    constructor() {
        super()

        this.state = {
            title: '',
            description: '',
            imgUrl: '',
            commentsArr: []
        }
    }

    handleChange = e => {
        const { name } = e.target
        this.setState({
            [name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        let post = this.state;
        this.props.newPost(post)
        this.props.handleClick()
    }

    render() {
        return (
            <form className="form-class" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="title" name="title" value={this.state.title} onChange={this.handleChange} required/>
                <input type="text" placeholder="description" name="description" value={this.state.description} onChange={this.handleChange} required/>
                <input type="text" placeholder="image url" name="imgUrl" value={this.state.imgUrl} onChange={this.handleChange} required/>
                <button>Submit</button>
            </form>
        );
    }
}

export default connect(null, { newPost })(Form)