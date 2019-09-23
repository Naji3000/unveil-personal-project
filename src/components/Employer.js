import React from 'react'
import './styles/Employer.css'



class Employer extends React.Component{
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return(
            <>
            
            <div className='employer-title' >
                <h1 className='choose'>Choose The Industry You Would Like To View </h1>
            </div>
            
            <div className="industry-fields">

                <button>Audio Engineer</button>
                <button>Music Artist</button>
                <button>Film Composer</button>
                <button>Game Designer</button>
            </div>
            
            
            </>
        )
    }
}
export default Employer;
