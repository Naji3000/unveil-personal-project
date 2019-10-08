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
                <h1 className='choose'>Choose Th ....... It doesn't matter, just click the button </h1>
            </div>


            <div>
                
                <Link className='buttons' to='/scout'>
                    
                <button className="button-1">Click Me</button>
                
            

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
