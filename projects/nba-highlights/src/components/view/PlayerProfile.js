import React, { Component } from 'react';
import YTSearch from 'youtube-api-search'
import { connect } from 'react-redux'
import Highlights from './Highlights'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import CloseIcon from '@material-ui/icons/Clear';
import { API_KEY } from '../../keys'

let selected = null


class PlayerProfile extends Component {
    constructor(props){
        super(props)

        this.state = {
            highlight: null,
            profiles: [],
            player: null
        }
    }

    componentDidMount(){
        let profiles = this.props.playersArr.map(player => player)
        this.setState({profiles})
    }

    videoSearch(player){
        YTSearch( {key: API_KEY, term: `${player} + best highlights`}, video => {
            this.setState({highlight: video[0]})
        })
    }

    render(props) {
        if(!this.state.profiles[0]){
            return 'Loading...'
        }
        selected = this.state.profiles.filter(player=> player._id == this.props.match.params.id)
        return (
            <div className="player-profile-wrapper">
                <div className="player-profile-container">
                    <Link to='/players'><Button><CloseIcon /></Button></Link>
                    <div className="player-profile-top">
                        <div className="player-profile-top-middle">
                            <div className="player-profile-img">
                                <img src={selected[0].playerImg} alt=""/>
                            </div>
                            <div className="player-name-tag">
                                <h1>#{selected[0].number} {selected[0].fullname}</h1>
                                <h3>{selected[0].team}</h3>
                            </div>
                        </div>
                        <Highlights video={this.state.highlight} search={this.videoSearch(selected[0].fullname)}/> 
                    </div>
                    <div className="player-profile-bottom">
                        <List>
                            <div className="player-profile-categories">
                                <ListItem dense button>
                                        <ListItemText>team</ListItemText>
                                        <ListItemText>gp</ListItemText>
                                        <ListItemText>min</ListItemText>
                                        <ListItemText>pts</ListItemText>
                                        <ListItemText>fgm</ListItemText>
                                        <ListItemText>fga</ListItemText>
                                        <ListItemText>fg%</ListItemText>
                                        <ListItemText>3pm</ListItemText>
                                        <ListItemText>3pa</ListItemText>
                                        <ListItemText>3p%</ListItemText>
                                        <ListItemText>ftp</ListItemText>
                                        <ListItemText>oreb</ListItemText>
                                        <ListItemText>dreb</ListItemText>
                                        <ListItemText>ast</ListItemText>
                                        <ListItemText>tov</ListItemText>
                                        <ListItemText>stl</ListItemText>
                                        <ListItemText>blk</ListItemText>
                                </ListItem>
                            </div>
                            <div className="player-profile-stats">
                            <ListItem className="player-profile-stats"dense button>
                                    <ListItemText>{selected[0].teamAbbr}</ListItemText>
                                    <ListItemText>{selected[0].gp}</ListItemText>
                                    <ListItemText>{selected[0].min}</ListItemText>
                                    <ListItemText>{selected[0].pts}</ListItemText>
                                    <ListItemText>{selected[0].fmg}</ListItemText>
                                    <ListItemText>{selected[0].fga}</ListItemText>
                                    <ListItemText>{selected[0].fgp}</ListItemText>
                                    <ListItemText>{selected[0].threepm}</ListItemText>
                                    <ListItemText>{selected[0].threepa}</ListItemText>
                                    <ListItemText>{selected[0].threepp}</ListItemText>
                                    <ListItemText>{selected[0].ftp}</ListItemText>
                                    <ListItemText>{selected[0].oreb}</ListItemText>
                                    <ListItemText>{selected[0].dreb}</ListItemText>
                                    <ListItemText>{selected[0].ast}</ListItemText>
                                    <ListItemText>{selected[0].tov}</ListItemText>
                                    <ListItemText>{selected[0].stl}</ListItemText>
                                    <ListItemText>{selected[0].blk}</ListItemText>
                            </ListItem>
                            </div>
                        </List>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(state => state, {})(PlayerProfile)