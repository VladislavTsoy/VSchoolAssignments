import { createStore, applyMiddleware } from 'redux'
import axios from 'axios'
import thunk from 'redux-thunk'
import { NEWS_API_KEY, NEWS_URL, PLAYERS_URL, VSCHOOL_URL } from '../keys'

// const NEWS_URL = "https://newsapi.org/v2/everything?q=nba&sortBy=relevancy&from=2018-09-10&language=en&apiKey="
// const PLAYERS_URL = "http://data.nba.net/10s/prod/v1/2016/players.json"
// const VSCHOOL_URL = "https://vschool-cors.herokuapp.com?url="

const state = {
    newsArticlesArr: [],
    playersArr: []
}

export const getNews = () => {
    return function (dispatch) {
        axios.get(NEWS_URL + NEWS_API_KEY).then(res => {
            dispatch({
                type: "GET_NEWS",
                news: res.data
            })
        })
    }
}

export const getPlayers = () => {
    let playerList
    return function (dispatch) {
        axios.get(VSCHOOL_URL + PLAYERS_URL)
            .then(res => {
                playerList = res.data.league.standard.map(player => {
                    return {
                        fullname: player.firstName + ' ' + player.lastName,
                        first: player.firstName,
                        last: player.lastName,
                        position: player.pos,
                        height: player.heightFeet + '`' + player.heightInches,
                        number: player.jersey,
                        weight: player.weightPounds + ' lb'
                        // playerImg: getPlayerImg(player.firstName,player.lastName)
                    }
                })
                const promises = playerList.map(player => {
                    return axios.get(`https://nba-players.herokuapp.com/players/${player.last}/${player.first}`, {
                        responseType: 'arraybuffer'
                    })
                })

                return Promise.all(promises)
            })
            .then(responses => {

                responses.map((res, i) => {
                    const base64 = btoa(new Uint8Array(res.data).reduce((data, byte) => data + String.fromCharCode(byte), '', ), );
                    playerList[i].playerImg = "data:;base64," + base64
                })
                return playerList

            }).then( players => {
                // console.log(players)
                const promises = players.map(player => {
                    return axios.get(VSCHOOL_URL + `https://nba-players.herokuapp.com/players-stats/${player.last}/${player.first}`)
                })
                return Promise.all(promises)
            }).then( responses => {
                // console.log(responses)
                responses.map((player, i) => {
                    playerList[i].team = player.data.team_name,
                    playerList[i].teamAbbr = player.data.team_acronym,
                    playerList[i].gp = player.data.games_played,
                    playerList[i].min = player.data.minutes_per_game,
                    playerList[i].pts = player.data.points_per_game,
                    playerList[i].fgm = player.data.field_goals_made_per_game,
                    playerList[i].fga = player.data.field_goals_attempted_per_game,
                    playerList[i].fgp = player.data.field_goal_percentage,
                    playerList[i].threepm = player.data.three_point_made_per_game,
                    playerList[i].threepa = player.data.three_point_attempted_per_game,
                    playerList[i].threepp = player.data.three_point_percentage,
                    playerList[i].ftp = player.data.free_throw_percentage,
                    playerList[i].oreb = player.data.offensive_rebounds_per_game,
                    playerList[i].dreb = player.data.defensive_rebounds_per_game,
                    playerList[i].ast = player.data.assists_per_game,
                    playerList[i].tov = player.data.turnovers_per_game,
                    playerList[i].stl = player.data.steals_per_game,
                    playerList[i].blk = player.data.blocks_per_game
                    playerList[i]._id = i
                })
                dispatch({
                    type: "GET_PLAYERS",
                    league: playerList
                })
            })        
    }
}

const reducer = (prevState = state, action) => {
    switch (action.type) {
        case "GET_NEWS":
            let temp = []
            let set = new Set()
            for (var i = 0; i < 20; i++) {
                let tempObj = {
                    title: action.news.articles[i].title,
                    author: action.news.articles[i].author,
                    description: action.news.articles[i].description,
                    date: action.news.articles[i].publishedAt,
                    url: action.news.articles[i].url,
                    imgUrl: action.news.articles[i].urlToImage
                }
                if (!set.has(tempObj.description)) {
                    temp.push(tempObj)
                    set.add(tempObj.description)
                }
            }
            
            return {
                newsArticlesArr: [...temp],
                playersArr: prevState.playersArr,
            }
        case "GET_PLAYERS":
            return {
                newsArticlesArr: prevState.newsArticlesArr,
                playersArr: [...action.league],
            }
   
        default:
            console.log('defaulted')
            return prevState;
    }
}

export default createStore(
    reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
)