import React from 'react';
import axios from 'axios'
import Post from './Post'
import {updateUser} from '../redux/reducers/userReducer'
import {connect} from 'react-redux'
import './styles/exp.css'
import ExpNav from './ExpNav';

class Exp extends React.Component {
    constructor(){
        super()
        this.state = {
            post: [],
            allPost: []
        }
    }
    
    componentDidMount(){
        // axios.get('/api/user/posts').then(res => {
        //     this.setState({post: res.data})
        // })
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
            <ExpNav />
            {/* <ExploreNav /> */}
            {/* <FeedNav /> */}

            <section className='exp-container'>
                <div className='exp-tab'>
                <h1>EXPLORE</h1>

                </div>

                
                                <div className='exp-box'>
                                {this.state.allPost.map((val, i) => {
                                    return <Post 
                                        key={i}
                                        feedPic={val.url}
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

export default connect(mapStateToProps, {updateUser})(Exp)