import React from 'react';
import axios from 'axios'
import './styles/expNav.css'
import {Link} from 'react-router-dom'


class ExpNav extends React.Component {
    constructor(){
        super()
        this.state = {
    
            

        }
    }

    
    

    render(){
        return(
            <>
            <nav className='exp-menu'>
                <div>
                    <Link className='exp-nav' to='/'>
                            <h1 >unveil</h1>
                    </Link>
                </div>
            
            </nav>
            </>
        )
    }
}

export default ExpNav;