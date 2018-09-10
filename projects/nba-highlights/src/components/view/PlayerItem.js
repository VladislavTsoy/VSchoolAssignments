import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import blank from '../../images/blank.png'

const PlayerItem = props => {
    
    return (
        <ListItem dense button>
            <Avatar alt="" src={props.playerObj.playerImg.length > 150 ? props.playerObj.playerImg : blank} />
            <ListItemText>{props.playerObj.fullname}</ListItemText>
            <div className="player-attributes-container">
            
                <div className="player-attributes-children team">
                    <ListItemText>{props.playerObj.team}</ListItemText>
                </div>
                <div className="player-attributes-children response">
                    <ListItemText>{props.playerObj.position}</ListItemText>
                </div>

                <div className="player-attributes-children response">
                    <ListItemText>{props.playerObj.number}</ListItemText>
                </div>  

                <div className="player-attributes-children response">
                    <ListItemText>{props.playerObj.height}</ListItemText>
                </div>

                <div className="player-attributes-children response">
                    <ListItemText>{props.playerObj.weight}</ListItemText>
                </div>
            </div>
        </ListItem>
    )
}

export default PlayerItem