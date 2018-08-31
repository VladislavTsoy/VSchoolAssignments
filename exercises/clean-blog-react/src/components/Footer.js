import React from 'react'
import fb from '../images/fb.png'
import git from '../images/git.png'
import tw from '../images/tw.png'
import '../styles/footer.css'

const Footer = () => {
    return (
        <div class='footer-nav'>
            <div class='social-links-wrapper'>
                <nav class='social-links'>
                    <ul>
                        <a href="#"><img src={tw} alt=""/></a>
                        <a href="#"><img src={fb} alt=""/></a>
                        <a href="#"><img src={git} alt=""/></a>
                    </ul>
                </nav>
            </div>
            <div class='copyright'>
                <p>Copyright &copy; Your website 2018</p>
            </div>
        </div>
    )
}

export default Footer