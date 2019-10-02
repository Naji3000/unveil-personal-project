import React from 'react';
import './styles/exploreNav.css'
import {Link} from 'react-router-dom'


class ExploreNav extends React.Component {
    constructor(){
        super()
        this.state = {
            

        }
    }

    render(){
        return(
            <>
            <nav className='Explore-Nav'>
                <div>
                    <h1 className='nav-explore'>unveil</h1>
                </div>

                <div>
                    <ul className='explore-menu'>
                        <Link className='feed-explore' to='/feed'>
                        <li>Feed</li>
                        </Link>
                        <Link className='profile-link' to='/user'>
                        <li>Profile</li>
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

export default ExploreNav;