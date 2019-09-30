import React from 'react';
import axios from 'axios'
import FeedNav from './FeedNav'
import Post from './Post'
import './styles/explore.css'

class Explore extends React.Component {
    constructor(){
        super()
        this.state = {
            post: []
        }
    }
    
    componentDidMount(){
        axios.get('/api/user/posts').then(res => {
            this.setState({post: res.data})
        })
    }

    render(){
        return(
            <>
            {/* <FeedNav /> */}

            <section className='explore-container'>
                <div className='explore-tab'>
                <h1>Explore</h1>

                </div>
                <div className='explore-box'>
                {this.state.post.map((val, i) => {
                    return <Post 
                        key={i}
                        postTitle={val.title}
                        postDescription={val.description}
                    />
                })}

                </div>

            </section>

        
            </>


        )
    }
}

export default Explore


