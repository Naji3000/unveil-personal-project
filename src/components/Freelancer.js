import React from 'react';
import axios from 'axios'
import Post from './Post'
import {Link} from 'react-router-dom'
import './styles/freelanceProfile.css'



class Freelancer extends React.Component {
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
            <section className='profile-container'>
                
                <div className='portfolio-name'>

                
                <div>
                <Link to='/feed'>
                <button> News Feed </button>
                </Link>
                </div>
                </div>
                {this.state.post.map((val, i) => {
                    return <Post 
                        key={i}
                        postTitle={val.title}
                        postDescription={val.description}
                    />
                })}
            


            </section>

            
                
                
            </>
        )
    }
}

export default Freelancer