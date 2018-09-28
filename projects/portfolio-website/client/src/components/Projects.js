import React from 'react';

// pics
import finstagram from '../images/fin.png'
import todo from '../images/todo.png'
import music from '../images/music.png'
import business from '../images/business.png'
import pokemon from '../images/pokemon.png'
import nba from '../images/nba.png'
import plug from '../images/plug.png'
import bounty from '../images/bounty.png'

// components
import ProjectItem from './ProjectItem'
const sep = [
    {
        title: "Music Stream - Full Stack",
        description: "Back-end: NodeJS, ExpressJS, MongoDB, Mongoose, GraphQL - Front-end: ReactJS, Redux, Apollo, Material-UI - MP3 Source: AWS S3",
        imgUrl: music,
        date: "9 - 2018",
        link: null
    },
    {
        title: "NBA Daily",
        description: "Front-end: ReactJS, Redux, Material-UI - API's used: 'www.newsapi.org', 'www.data.nba.net', 'www.nba-players.herokuapp.com' - Features: latest nba news, teams, player statistics & highlights",
        imgUrl: nba,
        date: "9 - 2018",
        link: null
    }
]

const aug = [
    {
        title: "Bounty Hunter - Full Stack",
        description: "Back-end: NodeJS, Express, MongoDB, Mongoose, implemented RESTful API - Front-end: ReactJS, Redux, Material-UI - Features: users can view, post, edit, and delete star wars bounties",
        imgUrl: bounty,
        date: "8 - 2018",
        link: null
    },
    {
        title: "Finstagram",
        description: "Front-end: ReactJS, Redux, Material-UI - Features: Users can post, like, edit, comment on & delete pictures",
        imgUrl: finstagram,
        date: "8 - 2018",
        link:'finstagram.surge.sh'
    },
    {
        title: "Plugville.co",
        description: "A promotion company. Front-end: VanillaJS - API used: 'www.mailchimp.com' - Features: users can subscribe to plugville's newsletters.",
        imgUrl: plug,
        date: "8 - 2018",
        link: "plugville.co"
    },
    {
        title: "To do app",
        description: "Used Axios to make CRUD requests to API.  Front-end: VanillaJS - API: 'www.vschool.com/todo' Features: users can add, view, edit, and delete posts.",
        imgUrl: todo,
        date: "8 - 2018",
        link: `hushed-pin.surge.sh`
    }
]

const jul = [
    {
        title: "Business Time",
        description: "Static Website.  Front-End: VanillaJS - Features: login pop-up, home, contacts, & about page",
        imgUrl: business,
        date: "7 - 2018",
        link: `businessTime.surge.sh`
    },
    {
        title: "Pokemon Terminal",
        description: "Server-side RPG. model after the classic pokemon yellow gameboy game.  Back-end: NodeJS",
        imgUrl: pokemon,
        date: "7 - 2018",
        link: null
    }
]

const Projects = () => {
    return (
        <div id="project-container">

            <div className="month-container">
            <p className="month-abbr">"september"</p>
            {/* <p className="month-abbr snapshot">"snapshot"</p> */}
            {sep.map(project => {
                return <ProjectItem key={project.title} {...project}/>
            })}
            </div>

            <div className="month-container">
            <p className="month-abbr">"august"</p>
            {aug.map(project => {
                return <ProjectItem key={project.title} {...project}/>
            })}
            </div>

            <div className="month-container">
            <p className="month-abbr">"july"</p>
            {jul.map(project => {
                return <ProjectItem key={project.title} {...project}/>
            })}
            </div>
        </div>
    );
};

export default Projects;