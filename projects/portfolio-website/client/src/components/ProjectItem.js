import React, { Component } from 'react';

class ProjectItem extends Component {
    constructor() {
        super()
        this.state = {
            imgToggle: false
        }
    }

    handleToggle = () => {
        this.setState(prevState => {
            return {
                imgToggle: !prevState.imgToggle
            }
        })
        console.log(this.state.imgToggle)
    }




    render(){
        return (
            <div className="project-card">
                
                <div onMouseEnter={this.handleToggle} onMouseLeave={this.handleToggle} onClick={() => window.open(`http://${this.props.link}`)}>
                    <p className="project-date">{this.props.date}</p>
                    <h5 className="project-title">{this.props.title}</h5>
                    <h6 className="project-description">{this.props.description}</h6>
                    {this.state.imgToggle && <img className="project-image" src={this.props.imgUrl} />}
                </div>
            </div>
        );
    }
};

export default ProjectItem;