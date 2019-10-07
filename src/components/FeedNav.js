import React from 'react';
import axios from 'axios'
import './styles/feedNav.css'
import {Link} from 'react-router-dom'


class feedNav extends React.Component {
    constructor(){
        super()
        this.state = {
            menuStatusOpen: 'side-menu',
            

        }
    }

    toggle= () => {
        if(this.state.menuStatusOpen === 'side-menu-close' || this.state.menuStatusOpen === 'side-menu'){
            this.setState({menuStatusOpen: 'side-menu-open'})
        }else if (this.state.menuStatusOpen === 'side-menu-open'){
            this.setState({menuStatusOpen: 'side-menu-close'})
        }
    }
    logoutUser = () => {
        axios.post('/auth/logout')

    }

    render(){
        return(
            <>
            <nav className='Nav-menu'>
                <div>
                    <Link className='title-nav' to='/'>
                            <h1 >unveil</h1>
                    </Link>
                </div>
                <div className="side-div">
                    <ul className='menu-list'>
                        <Link className='link-1' to='/user'>
                        <li>Profile</li>
                        </Link>
                        <Link className='link-2' to='/explore'>
                        <li>Explore</li>
                        </Link>
                        <Link onClick={this.logoutUser} className='logout-link-2'  to ='/'>
                        <li>Logout</li>
                        </Link>
                    
                        <li className='hamburger-gif side-menu'>
                        <img 
                        className='burger-button'
                        onClick={this.toggle}
                        src ="https://i2.wp.com/menupatterns.com/wp-content/uploads/2016/10/hamburger_icon_animation.gif?zoom=2.625&resize=374%2C338" 
                        alt='burger'
                        />
                        </li>
                    </ul>
                </div>
            </nav>
            <div className={`${this.state.menuStatusOpen} side-menu`}>
                <Link className='side-menu-link' to='/user'>
                    <h1>Profile</h1>
                </Link>
                <Link className='side-menu-link-2' to='/explore'>
                    <h1>Explore</h1>
                </Link>
                <Link onClick={this.logoutUser} className='side-menu-link-3' to ='/'>
                <h1>Logout</h1>
                </Link>
            </div>
            </>
        )
    }
}

export default feedNav;