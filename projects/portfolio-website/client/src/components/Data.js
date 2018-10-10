// pics
import finstagram from '../images/fin.png'
import todo from '../images/todo.png'
import music from '../images/music.png'
import business from '../images/business.png'
import pokemon from '../images/pokemon.png'
import nba from '../images/nba.png'
import plug from '../images/plug.png'
import bounty from '../images/bounty.png'
import hinter from '../images/hinter.png'
import proto from '../images/proto.png'

const sep = [
    {
        title: "Music Stream - Full Stack",
        description: "Back-end: NodeJS, ExpressJS, MongoDB, Mongoose, GraphQL - Front-end: ReactJS, Redux, Apollo, Material-UI - MP3 Source: AWS S3.",
        imgUrl: music,
        date: "9 - 2018",
        link: null
    },
    {
        title: "NBA Daily",
        description: "Front-end: ReactJS, Redux, Material-UI - API's used: 'www.newsapi.org', 'www.data.nba.net', 'www.nba-players.herokuapp.com' - Features: latest nba news, teams, player statistics & highlights.",
        imgUrl: nba,
        date: "9 - 2018",
        link: "/nba-2017-highlights.herokuapp.com/"
    }
]

const aug = [
    {
        title: "Bounty Hunter - Full Stack",
        description: "Back-end: NodeJS, Express, MongoDB, Mongoose, implemented RESTful API - Front-end: ReactJS, Redux, Material-UI - Features: users can view, post, edit, and delete star wars bounties.",
        imgUrl: bounty,
        date: "8 - 2018",
        link: "bounty-hunter-og.herokuapp.com"
    },
    {
        title: "Finstagram",
        description: "Front-end: ReactJS, Redux, Material-UI - Features: Users can post, like, edit, comment on & delete pictures.",
        imgUrl: finstagram,
        date: "8 - 2018",
        link:"finstagramgram.herokuapp.com/"
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
        description: "Static Website.  Front-End: VanillaJS - Features: login pop-up, home, contacts, & about page.",
        imgUrl: business,
        date: "7 - 2018",
        link: `businessTime.surge.sh`
    },
    {
        title: "Pokemon Terminal",
        description: "Server-side RPG. model after the classic pokemon yellow gameboy game.  Back-end: NodeJS.",
        imgUrl: pokemon,
        date: "7 - 2018",
        link: ""
    }
]

const dec = [
    {
        title: "Hinter: House Hunter - Full Stack",
        description: "Back-End: PHP, AWS, SQL - Front-End: VanillaJS, JQuery, AJAX - Features: Allows users to find their perfecct home in NJ based on 12 optimization tools used to query data.",
        imgUrl: hinter,
        date: "12 - 2017",
        link: ""
    },
    {
        title: "Portfolio beta",
        description: "Front-End: VanillaJS, JQuery - Web development gives me the creative freedom to make beautifully designed websites.",
        imgUrl: proto,
        date: "12 - 2017",
        link: ""
    },

]

export { dec, jul, aug, sep } 