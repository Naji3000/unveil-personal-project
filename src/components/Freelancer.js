import React from 'react';
import axios from 'axios'
import Post from './Post'
import profileNav from './styles/profileNav.css'
import {Link} from 'react-router-dom'
import './styles/freelanceProfile.css'
import ProfileNav from './ProfileNav';



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
            <ProfileNav />
                    <h1 className='profile-title'>PROFILE</h1>
            
            <section className='profile-container'>
                
                <div className='portfolio-name'>
                    <h1 className='check-me'>Check out my post!</h1>
                        <div>
                        {this.state.post.map((val, i) => {
                            return <Post 
                                key={i}
                                postTitle={val.title}
                                postDescription={val.description}
                            />
                        })}

                        </div>

                </div>
                
            


            </section>

            
                
                
            </>
        )
    }
}

export default Freelancer