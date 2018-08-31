import React from 'react'
import '../styles/blog.css'
const Blog = (props) => {

    return (
        <div class='blog-item'>
            <h2><a href="#">{props.title}</a></h2>
            <h4><a href='#'>{props.subtitle}</a></h4>
            <h6>Posted by <a href="#">{props.author}</a> on {props.date}</h6>
        </div>
    )
}

export default Blog