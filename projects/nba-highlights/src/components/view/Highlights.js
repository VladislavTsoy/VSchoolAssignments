import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';

const Highlights = props => {
    const styles = {
        position: "relative",
        left: "-20%",
        top: "-5%"
    }
    
    if(!props.video) {
        return <CircularProgress style={styles} size={100} color="secondary"/>
    }

    const videoId = props.video.id.videoId
    const url = `https://www.youtube.com/embed/${videoId}`

    return (
        <div>
            <iframe src={url} autoPlay="true" muted="true"></iframe>
        </div>
    )
}

export default Highlights