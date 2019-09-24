import React from 'react';
import {Link} from 'react-router-dom'
import './styles/freelanceProfile.css'



class Freelancer extends React.Component {
    constructor(){
        super()
            this.state = {

            }
        }
    render(){
        return(
            <>
            <section className='profile-container'>
                
                <div className='portfolio-name'>

                <h1> Naji Ali </h1>
                <div>
                <Link to='/feed'>
                <button> News Feed </button>
                </Link>

                </div>
                </div>
            


            </section>

            
                
                
            </>
        )
    }
}

export default Freelancer