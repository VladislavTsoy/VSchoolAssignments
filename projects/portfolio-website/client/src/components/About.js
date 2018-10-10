import React from 'react';
import profilePic from '../images/profile.jpg'
import { CSSTransition } from 'react-transition-group'
const About = () => {
    return (
        <div className="about-wrapper">
            <div className="about-content">
                <img src={profilePic} alt=""/>

                <CSSTransition in={true} appear={true} timeout={300} classNames="fade">
                    <div id="about-description">
                        <h5>Hey, I'm Vlad</h5>
                        <h6>I spent 5 years as a Network Engineer in the Marine Corps.</h6>
                        <h6>I'm a Rutgers University Alum with a Bachelors in Computer Science.</h6>
                        <h6>Aside from my passion for programming.</h6>
                        <h6>I enjoy my coffee black.</h6>
                        <h6>I'm not a big fan of IPA's.</h6>
                        <h6>I also have a hyperactive terrier-shih tzu, who doesn't look like a terrier nor a shih tzu.</h6>
                        <h6>Anyways, let's build something incredible together.</h6>
                    </div>
                    
               </CSSTransition>
            </div>
        </div>
    );
};

export default About;