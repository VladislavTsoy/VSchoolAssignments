import React from 'react';
import { dec, jul, aug, sep } from './Data'
import { CSSTransition } from 'react-transition-group'

// components
import ProjectItem from './ProjectItem'

const Projects = () => {
    return (
        <div id="project-container">
            <CSSTransition in={true} appear={true} timeout={300} classNames="fade">
                <div className="month-container">
                <p className="month-abbr">"september"</p>
                {/* <p className="month-abbr snapshot">"snapshot"</p> */}
                {sep.map(project => {
                    return <ProjectItem key={project.title} {...project}/>
                })}
                </div>
            </CSSTransition>

            <CSSTransition in={true} appear={true} timeout={300} classNames="fade">
                <div className="month-container">
                <p className="month-abbr">"august"</p>
                {aug.map(project => {
                    return <ProjectItem key={project.title} {...project}/>
                })}
                </div>
            </CSSTransition>

            <CSSTransition in={true} appear={true} timeout={300} classNames="fade">
                <div className="month-container">
                <p className="month-abbr">"july"</p>
                {jul.map(project => {
                    return <ProjectItem key={project.title} {...project}/>
                })}
                </div>
            </CSSTransition>

            <CSSTransition in={true} appear={true} timeout={300} classNames="fade">
                <div className="month-container">
                <p className="month-abbr">"dec"</p>
                {dec.map(project => {
                    return <ProjectItem key={project.title} {...project}/>
                })}
                </div>
            </CSSTransition>
        </div>
    );
};

export default Projects;