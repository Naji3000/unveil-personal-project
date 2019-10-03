import React from 'react';
import axios from 'axios'
import ExploreNav from './ExploreNav'
import Post from './Post'
import {updateUser} from '../redux/reducers/userReducer'
import {connect} from 'react-redux'
import './styles/explore.css'

class Explore extends React.Component {
    constructor(){
        super()
        this.state = {
            post: [],
            allPost: []
        }
    }
    
    componentDidMount(){
        axios.get('/api/user/posts').then(res => {
            this.setState({post: res.data})
        })
            this.allPost();
    }
            allPost = () => {
                axios.get('/api/user/allPost').then (res => {
                    console.log(res)
                    this.setState({allPost: res.data})

                })
            }
    

    render(){
        
        return(
            <>
            <ExploreNav />
            {/* <FeedNav /> */}

            <section className='explore-container'>
                <div className='explore-tab'>
                <h1>EXPLORE</h1>

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

const mapStateToProps = (reduxState) => {
    return {
        user: reduxState.userReducer.user
    }
}

export default connect(mapStateToProps, {updateUser})(Explore)


