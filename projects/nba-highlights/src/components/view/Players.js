import React, { Component } from 'react';
import PlayerItem from './PlayerItem'
import { connect } from 'react-redux'
import { getPlayers  } from '../../redux'
import List from '@material-ui/core/List';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Switch, Route, Link} from 'react-router-dom'
import PlayerProfile from './PlayerProfile'
import PlayerSearch from '../controller/PlayerSearch'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class Players extends Component {

    componentDidMount() {
        if(this.props.playersArr.length < 1){
            this.props.getPlayers()
        }
    }
    render() {
        const styles = {
            position: "relative",
            left: "45%",
            top: "45%"
        }

        if(this.props.playersArr.length < 1){
            return <CircularProgress style={styles} size={100} color="secondary"/>
        }
        const displayPlayers = this.props.playersArr.map((player, i) => {
            return <Link to={`/players/${player._id}`} key={player._id}><PlayerItem playerObj={ player } /></Link>
        })
        return (
            <div>
                <List>
                    <PlayerSearch />
                    <div className="player-profile-categories">
                            <ListItem dense button>
                                <ListItemText></ListItemText>
                                <ListItemText>name</ListItemText>
                                <ListItemText></ListItemText>
                                <ListItemText></ListItemText>
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
                    {displayPlayers}
                </List>
                <Switch>
                    <Route path={`${this.props.match.url}/:id`} component={ PlayerProfile }/>
                </Switch>
            </div>
            

        );
    }
}

export default connect(state => state, { getPlayers })(Players)