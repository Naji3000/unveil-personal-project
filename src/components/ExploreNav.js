import React from 'react';
import axios from 'axios'
import './styles/exploreNav.css'
import {Link} from 'react-router-dom'


class ExploreNav extends React.Component {
    constructor(){
        super()
        this.state = {
            menuOpenStatus: 'the-slide'
            

        }
    }

    toggle = () => {
        if(this.state.menuOpenStatus === 'the-slide-close' || this.state.menuOpenStatus === 'the-slide'){
            return this.setState({menuOpenStatus: 'the-slide-open'})
        }else if(this.state.menuOpenStatus === 'the-slide-open'){
            return this.setState({menuOpenStatus: 'the-slide-close'})
        }
    }

    logoutUser = () => {
        axios.post('/auth/logout')

    }

    render(){
        return(
            <>
            <nav className='Explore-Nav'>
                <div>
                    <Link className='nav-explore' to='/' >
                    <h1>unveil</h1>
                    </Link>
                </div>

                <div>
                    <ul className='explore-menu'>
                        <Link className='feed-explore' to='/feed'>
                        <li>Feed</li>
                        </Link>
                        <Link className='profile-link' to='/user'>
                        <li>Profile</li>
                        </Link>
                        <Link onClick={this.logoutUser} className='logout-link-3'  to ='/'>
                        <li>Logout</li>
                        </Link>

                        <li className='ham-gif the-slide'>
                        <img 
                        className='burger-button-2'
                        onClick={this.toggle}
                        src ="https://i2.wp.com/menupatterns.com/wp-content/uploads/2016/10/hamburger_icon_animation.gif?zoom=2.625&resize=374%2C338" 
                        alt='burger'
                        />
                        </li>
                    </ul>
                </div>
            </nav>
            <div className={`${this.state.menuOpenStatus} the-slide`} >
                <Link className='the-slide-link' to='/feed'>
                    <h1>Feed</h1>
                </Link>
                <Link className='the-slide-link-2' to='/user'>
                    <h1>Profile</h1>
                </Link>
                <Link onClick={this.logoutUser} className='the-slide-link-3' to='/' >
                <h1>Logout</h1>
                </Link>
            </div>
            </>
        )
    }
}

export default ExploreNav;