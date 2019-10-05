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
                
                <Link className='buttons' to='/scout'>
                    
                <button className="button-1">Audio Engineer</button>
                <button className="button-3">Film Composer</button>
                <button className="button-4">Game Designer</button>
                <button className="button-5">Sound Designer</button>
            

                </Link>

                
            </div>

            <div className='not-employer'>

            <h5>Not looking for talent? <Link className='go-back' to='/'>Go Back</Link></h5>

            </div>
            
            
            </section>
        )
    }
}
export default Employer;
