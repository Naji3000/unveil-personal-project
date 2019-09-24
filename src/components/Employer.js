import React from 'react'
import {Link} from 'react-router-dom'
import './styles/employer.css'


class Employer extends React.Component{
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return(
            
            <section >
            
            <div className='employer' >
                <h1 className='choose'>Choose The Industry You Would Like To View </h1>
            </div>


            <div>
                
                <Link className='buttons' to='/explore'>
                    
                <button className="button-1">Audio Engineer</button>
                <button >Music Artist</button>
                <button >Film Composer</button>
                <button >Game Designer</button>

                </Link>

                
            </div>

            <div className='not-employer'>

            <h6>Not looking for talent? <Link to='/'>Go Back</Link></h6>
            
            </div>
            
            
            </section>
        )
    }
}
export default Employer;
