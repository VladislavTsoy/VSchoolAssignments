import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const NewsItem = props => {

    const getWidth = i => {
        if(i === 0 || i === 4 || i === 12 || i === 16 || i === 19) {
            return 940
        } else if (i === 5 || i === 10 || i === 17) {
            return 620
        } else {
            return 300
        }
    }
    

    const styles = {
        card: {
            width: getWidth(props.index),
            marginBottom: 30
        },
        media: {
            width: "auto",
            height: 300
        },
    }

    return (

      <Card style={styles.card} >
      
        <CardActionArea>
          <CardMedia
                    image={props.article.imgUrl}
                    title={props.article.title}
                    style={styles.media}/>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">{props.article.title}</Typography>
            <Typography component="p">{props.article.description}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button href={props.article.url}size="small" color="primary">
            Read More
          </Button>
        </CardActions>
      </Card>
    )
};

// NewsItem.propTypes = {
//     classes: PropTypes.object.isRequired
// }

export default NewsItem;