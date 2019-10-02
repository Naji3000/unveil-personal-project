import React from 'react';
import '../components/styles/profileNav.css'
import {Link} from 'react-router-dom'


class ProfileNav extends React.Component {
    constructor(){
        super()
        this.state = {
            menuOpenStatus: 'slide-menu'
            

        }
    }
    
    toggle = () => {
        if(this.state.menuOpenStatus === 'slide-menu-close' || this.state.menuOpenStatus === 'slide-menu'){
            this.setState({menuOpenStatus: 'slide-menu-open'})
        } else if (this.state.menuOpenStatus === 'slide-menu-open'){
            this.setState({menuOpenStatus:'slide-menu-close'})
        }
    }

    render(){
        return(
            <>
            <nav className='Profile-Nav'>
                <div>
                    <Link className='nav-title' to='/'>
                    <h1 >unveil</h1>
                    </Link>
                </div>

                <div>
                    <ul className='menu'>
                        <Link className='feed-link' to='/feed'>
                        <li>Feed</li>
                        </Link>
                        <Link className='explore-link' to='/explore'>
                        <li>Explore</li>
                        </Link>

                        <li className='burger-gif slide-menu'>
                        <img 
                        onClick={this.toggle}
                        src ="https://cdn.dribbble.com/users/1052821/screenshots/2606897/hamburger_menu.gif" 
                        alt='burger'
                        />
                        </li>
                        
                    </ul>
                </div>
            </nav>
            <div className={`${this.state.menuOpenStatus} slide-menu`} >
            <h1>Profile</h1>
            <h1>Explore</h1>
            </div>
            
            </>
        )
    }
}

export default ProfileNav;