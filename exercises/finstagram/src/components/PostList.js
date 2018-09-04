import React from 'react'
import Post from './Post'
import { connect } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const PostList = props => {
    console.log(props)
    return (
        <MuiThemeProvider >
            <div className='post-list'>
            {props.postsArr.map((post, i) => 
                                        <Post 
                                            key={post.description + i}
                                            title={post.title}
                                            description={post.description}
                                            imgUrl={post.imgUrl} 
                                            comments={post.commentsArr}/>
            )}
            </div>
        </MuiThemeProvider>
    )
}

export default connect(state => state, {})(PostList)