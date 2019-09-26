import React from 'react';
import FeedNav from './FeedNav'
import './styles/feed.css'


class Feed extends React.Component {
    constructor(){
        super()
        this.state = {
            postTitle: '',
            postInfo: '',
            previousPost: ''

        }
    }
    


    render(){
        return(
            <>
            <FeedNav />
            <div>

            </div>
            </>
        )
    }
}

export default Feed;