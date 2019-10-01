import React from 'react';
import '../components/styles/profileNav.css'
import {Link} from 'react-router-dom'


class ProfileNav extends React.Component {
    constructor(){
        super()
        this.state = {
            

        }
    }

    render(){
        return(
            <>
            <nav className='Profile-Nav'>
                <div>
                    <h1 className='nav-title'>unveil</h1>
                </div>

                <div>
                    <ul className='menu'>
                        <Link className='feed-link' to='/feed'>
                        <li>Feed</li>
                        </Link>
                        <Link className='explore-link' to='/explore'>
                        <li>Explore</li>
                        </Link>
                        
                    </ul>
                </div>
            </nav>
            {/* <div className={`${this.state.menuOpenStatus} side-menu`} >
            <li>Feed</li>
            <li>Explore</li>
            <li>Messages</li>
            </div> */}
            </>
        )
    }
}

export default ProfileNav;