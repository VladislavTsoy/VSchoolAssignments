import React, { Component } from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';
import HeartU from "material-ui/svg-icons/action/favorite-border"
import Heart from "material-ui/svg-icons/action/favorite"
import Comment from "material-ui/svg-icons/action/bookmark-border"
import CommentI from "material-ui/svg-icons/action/bookmark"
import DeleteMe from "material-ui/svg-icons/action/highlight-off"
import EditMe from "material-ui/svg-icons/action/reorder"
import { connect } from 'react-redux' 
import { deletePost, editPost, addComment, deleteComment } from '../redux'


class Post extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            editTitle: this.props.title,
            editDescription: this.props.description,
            editImgUrl: this.props.imgUrl,
            status: true,
            flag: true,
            comment: true,
            commentContent: ''
        }
    }

    handleChange = e => {
        const { name } = e.target 
        this.setState({
            [name]: e.target.value
        })
        console.log(this.state)
    }

    render(){
        const styles = {
            width: "66.7%",
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: "10px",
            marginTop: "40px",
            marginBottom: "40px"
        }

        const handleDelete = () => {
            let post = {
                imgUrl: this.props.imgUrl
            }
            this.props.deletePost(post)
        }

        const handleLike = () => {
            this.setState(prevState => {
                return {
                    flag: !prevState.flag
                }
            })
        }

        const handleSubmit = e => {
            e.preventDefault()
            const post = {
                title: this.state.editTitle,
                description: this.state.editDescription,
                imgUrl: this.state.editImgUrl,
                oldUrl: this.props.imgUrl
            }
            this.props.editPost(post)
            clickEdit()
        }

        const clickEdit = () => {
            this.setState(prevState => {
                return {
                    status: !prevState.status
                }
            })
        }

        const heartStyle = {
            color: "red"
        }

        const handleComment = () => {
            this.setState(prevState => {
                return {
                    comment: !prevState.comment
                }
            })
        }
       
        const handleCommentSubmit = e => {
            e.preventDefault()
            const post = {
                imgUrl: this.state.editImgUrl,
                comment: this.state.commentContent
            }
            this.props.addComment(post)
            this.setState({comment: true})
        }

        const handleCommentChange = e => {
            this.setState({commentContent: e.target.value})
        }

        return (
            <div>
                <Card style={styles}>         
                    <CardMedia overlay={ <CardTitle title={this.props.title}/>} >
                        <img src={this.props.imgUrl} alt="" />
                    </CardMedia>
                    <CardText>
                        {this.props.description}
                    </CardText>
                    <CardActions>
                        {
                            this.state.comment ? 
                            <FlatButton icon={ <Comment /> } onClick={handleComment}/>
                            :
                            <FlatButton icon={ <CommentI /> } onClick={handleComment}/>
                        }
                         
                        {
                        this.state.flag ? 
                        <FlatButton icon={ <HeartU /> } onClick={handleLike}/>
                        :
                        <FlatButton icon={ <Heart /> } onClick={handleLike} style={heartStyle}/>
                        }
                        <FlatButton icon={ <EditMe /> } onClick={clickEdit}/>
                        <FlatButton icon={ <DeleteMe /> } onClick={handleDelete}/>
                    </CardActions>
                {
                this.state.status ? 
                <div></div>
                :
                <form onSubmit={handleSubmit} className="edit-form">
                    title: <br/><input type="text" name="editTitle" value={this.state.editTitle} onChange={this.handleChange}/><br/>
                    description: <br/><input type="text" name="editDescription" value={this.state.editDescription} onChange={this.handleChange}/><br/>
                    url: <br/><input type="text" name="editImgUrl" value={this.state.editImgUrl} onChange={this.handleChange}/><br/>
                    <button>Submit</button>
                </form>
                }





                <List>
                {this.props.comments.map((comment, i) => {
                    return <div className="list-item" key={comment + i}>
                                <ListItem primaryText={comment}/>
                                <button onClick={() => {
                                    this.props.deleteComment({
                                        comment,
                                        imgUrl: this.props.imgUrl
                                    })
                                }} name={comment}>delete</button>
                            </div>
                })}
                </List>





                {
                this.state.comment ? 
                <div></div>
                :
                <div className="comment-form-container">
                    <form onSubmit={handleCommentSubmit} className="comment-form">
                        <input type="text" name="commentContent" value={this.state.commentContent} onChange={handleCommentChange} placeholder="add new comment"/>
                        <button>submit</button>
                    </form>
                </div>
                }
                </Card>
            </div>
        )
    }
}

export default connect(state => state, { deletePost, editPost, addComment, deleteComment })(Post)