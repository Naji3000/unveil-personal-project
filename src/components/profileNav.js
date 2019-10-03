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
                        src ="https://i2.wp.com/menupatterns.com/wp-content/uploads/2016/10/hamburger_icon_animation.gif?zoom=2.625&resize=374%2C338" 
                        alt='burger'
                        />
                        </li>
                        
                    </ul>
                </div>
            </nav>
            <div className={`${this.state.menuOpenStatus} slide-menu`}>

                <Link  className ='slide-link' to ='/feed'>
                    <h1>Feed</h1>
                </Link>

                <Link className = 'slide-link-2' to ='/explore'>
                    <h1>Explore</h1>
                </Link>
            </div>
            
            </>
        )
    }
}

export default ProfileNav;