import React from 'react'
import Blog from './Blog'
import '../styles/main.css'
import arrow from '../images/arrow.png'

const Main = () => {
    const posts = [
        {
            title: 'Man must explore, and this is expoloration at its greatest',
            subtitle: 'Problems look might small from 150 miles up',
            author: 'Start Bootstrap',
            date: 'September 24, 2018'
        },
        {
            title: 'I believe every human has a finite number of heartbeats. I dont intent to waste any of mine.',
            subtitle: '',
            author: 'Start Bootstrap',
            date: 'September 18, 2018'
        },
        {
            title: 'Science has not yet mastered prophecy',
            subtitle: 'We predict too much for the next year and yet far too little for the next ten.',
            author: 'Start Bootstrap',
            date: 'August 24, 2018'
        },
        {
            title: 'Failure is not an option',
            subtitle: '',
            author: 'Start Bootstrap',
            date: 'July 8, 2018'
        }
    ]

    const displayPosts = posts.map(post => {
        return <Blog key={post.title}
                        title={post.title}
                        subtitle={post.subtitle}
                        author={post.author}
                        date={post.date}/>
    })

    return (
        <div class='main-container'>
            {displayPosts}
            <button className='btn-next'>OLDER POSTS<img src={arrow} className='arrow' alt='arrow' /></button>
        </div>
        
    )
}

export default Main