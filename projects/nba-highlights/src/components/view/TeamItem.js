import React, { Component }from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



class TeamItem extends Component {
    render() {
        const styles = {
            card: {
                width: 170,
                marginBottom: 30
            },
            media: {
                width: 160,
                height: 150,
                backgroundSize: "contain",
                backgroundPosition: "center center"
            },
        }

        return (
            <Card style={styles.card} >
                <CardActionArea>
                    <Button href="/" size="small" color="primary">
                        <CardMedia className="team-images"
                                    style={styles.media}
                                    image={this.props.img}
                                    title={this.props.name}/>
                    </Button>
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">{this.props.name}</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        )
    }
}

export default TeamItem;