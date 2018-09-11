import React, { Component } from 'react';
import { connect } from 'react-redux'
import TeamItem from './TeamItem'
import uuid from 'uuid'
import atl from '../../images/atl.png'
import bos from '../../images/bos.png'
import bro from '../../images/bro.png'
import cha from '../../images/cha.png'
import chi from '../../images/chi.png'
import cle from '../../images/cle.png'
import dal from '../../images/dal.png'
import den from '../../images/den.png'
import det from '../../images/det.png'
import gsw from '../../images/gsw.png'
import hou from '../../images/hou.png'
import ind from '../../images/ind.png'
import lac from '../../images/lac.png'
import lal from '../../images/lal.png'
import mem from '../../images/mem.png'
import mia from '../../images/mia.png'
import mil from '../../images/mil.png'
import min from '../../images/min.png'
import nor from '../../images/nor.png'
import nyk from '../../images/nyk.png'
import okc from '../../images/okc.png'
import orl from '../../images/orl.png'
import phi from '../../images/phi.png'
import por from '../../images/por.png'
import sac from '../../images/sac.png'
import sas from '../../images/sas.png'
import pho from '../../images/pho.png'
import tor from '../../images/tor.png'
import uth from '../../images/uth.png'
import was from '../../images/was.png'
import PlayerItem from './PlayerItem'
import { getPlayers } from '../../redux'
import { Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import CloseIcon from '@material-ui/icons/Clear';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class Teams extends Component {
    constructor() {
        super() 
        this.state = {
            teamsArr: [
                {
                    team: 'Atlanta Hawk',
                    abbr: 'atl',
                    img: atl
                },
                {
                    team: 'Boston Celtics',
                    abbr: 'bos',
                    img: bos
                },
                {
                    team: 'Brooklyn Nets',
                    abbr: 'bro',
                    img: bro
                },
                {
                    team: 'Charlotte Hornets',
                    abbr: 'cha',
                    img: cha
                },
                {
                    team: 'Chicago Bulls',
                    abbr: 'chi',
                    img: chi
                },
                {
                    team: 'Cleveland Cavaliers',
                    abbr: 'cle',
                    img: cle
                },
                {
                    team: 'Dallas Mavericks',
                    abbr: 'dal',
                    img: dal
                },
                {
                    team: 'Denver Nuggets',
                    abbr: 'den',
                    img: den
                },
                {
                    team: 'Detroit Pistons',
                    abbr: 'det',
                    img: det
                },
                {
                    team: 'Golden State Warriors',
                    abbr: 'gsw',
                    img: gsw
                },
                {
                    team: 'Houston Rockets',
                    abbr: 'hou',
                    img: hou
                },
                {
                    team: 'Indiana Pacers',
                    abbr: 'ind',
                    img: ind
                },
                {
                    team: 'Los Angeles Clippers',
                    abbr: 'lac',
                    img: lac
                },
                {
                    team: 'Los Angeles Lakers',
                    abbr: 'lal',
                    img: lal
                },
                {
                    team: 'Memphis Grizzlies',
                    abbr: 'mem',
                    img: mem
                },
                {
                    team: 'Miami Heat',
                    abbr: 'mia',
                    img: mia
                },
                {
                    team: 'Milwaukee Bucks',
                    abbr: 'mil',
                    img: mil
                },
                {
                    team: 'Minnisota Timberwolves',
                    abbr: 'min',
                    img: min
                },
                {
                    team: 'New Orleans Pelicans',
                    abbr: 'nor',
                    img: nor
                },
                {
                    team: 'New York Knicks',
                    abbr: 'nyk',
                    img: nyk
                },
                {
                    team: 'Oklahoma City Thunder',
                    abbr: 'okc',
                    img: okc
                },
                {
                    team: 'Orlando Magic',
                    abbr: 'orl',
                    img: orl
                },
                {
                    team: 'Philadelphia 76ers',
                    abbr: 'phi',
                    img: phi
                },
                {
                    team: 'Phoenix Suns',
                    abbr: 'pho',
                    img: pho
                },
                {
                    team: 'Portland Trailblazers',
                    abbr: 'por',
                    img: por
                },
                {
                    team: 'Sacramento Kings',
                    abbr: 'sac',
                    img: sac
                },
                {
                    team: 'San Antonio Spurs',
                    abbr: 'sas',
                    img: sas
                },
                {
                    team: 'Toronto Raptors',
                    abbr: 'tor',
                    img: tor
                },
                {
                    team: 'Utah Jazz',
                    abbr: 'uth',
                    img: uth
                },
                {
                    team: 'Washington Wizards',
                    abbr: 'was',
                    img: was
                },
            ],
            selectedTeamPlayers: [],
            teamToggle: false
        }
    }
    componentDidMount() {
        if(this.props.playersArr.length < 1){
            this.props.getPlayers()
        }
    }

    handleTeamSelect = team => {
        let teamArr = this.props.playersArr.filter(player => {
            if(player.teamAbbr === team) {
                return player
            }
        })
        this.setState(prevState => {
            return {
                selectedTeamPlayers: [...teamArr],
                teamToggle: true
            }
        })
    }

    render() {
        
        const displayTeamPlayers = this.state.selectedTeamPlayers.map(player => {
            return <PlayerItem key={ uuid() } playerObj={ player } />    
        })

        const displayTeams = this.state.teamsArr.map(item => {
            return  <div key={ uuid() } className="team-container" onClick={() => this.handleTeamSelect(item.abbr)}>
                        <TeamItem name={item.team} img={item.img}/>
                    </div>
        })

        return (
            <div>
                <div className="team-container">
                    
                    {displayTeams}
                </div>
                {this.state.teamToggle ?
                <div className="selected-team-wrapper">
                    
                    <div className="selectedTeamPlayersList">
                        <Link to='/teams'><Button onClick={() => this.setState({teamToggle: false})}><CloseIcon /></Button></Link>
                        TEAM ROSTER:
                        <div className="player-profile-categories">
                            <ListItem dense button>
                                <ListItemText></ListItemText>
                                <ListItemText>name</ListItemText>
                                <ListItemText></ListItemText>
                                <ListItemText></ListItemText>
                                <ListItemText></ListItemText>
                                <ListItemText>team</ListItemText>
                                <ListItemText></ListItemText>
                                <ListItemText></ListItemText>
                                <ListItemText></ListItemText>
                                <ListItemText>position</ListItemText>
                                <ListItemText>jersey</ListItemText>
                                <ListItemText>height</ListItemText>
                                <ListItemText>weight</ListItemText>
                                <ListItemText></ListItemText>
                                <ListItemText></ListItemText>
                            </ListItem>
                        </div>
                        {displayTeamPlayers}
                    </div>
                </div>
                :
                <div></div>}
            </div>
        );
    }
}

export default connect(state=>state, { getPlayers })(Teams)