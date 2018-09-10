import React, { Component } from 'react'
import LinearProgress from '@material-ui/core/LinearProgress';
import NewsItem from './NewsItem'
import { connect } from 'react-redux'
import { getNews, getPlayers } from '../../redux'
import uuid from 'uuid'

class News extends Component {
    componentDidMount() {
        this.props.getNews()
        if(this.props.playersArr.length < 1){
         
            this.props.getPlayers()
        }
    }

    render() {
        if(this.props.newsArticlesArr.length < 1){
            return <LinearProgress color="secondary" />
        }

        const newsArticles = this.props.newsArticlesArr.map((item, i) => {
            return <NewsItem key={ uuid() } article={ item } index={ i }/>
        })

        return (
            <div className="news-item-wrapper">
                <h1 className="headlines">NBA DAILY</h1>
                {newsArticles}
            </div>
        );
    }
}

export default connect(state => state, { getNews, getPlayers })(News)