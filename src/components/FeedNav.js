import React from 'react';
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

    render(){
        return(
            <>
            <nav className='Nav-menu'>
                <div>
                    <h1 className='title-nav'>unveil</h1>
                </div>
                <div className="side-div">
                    <ul className='menu-list'>
                        <Link className='link-1' to='/user'>
                        <li>Profile</li>
                        </Link>
                        <Link className='link-2' to='/explore'>
                        <li>Explore</li>
                        </Link>
                    
                        <li className='hamburger-gif side-menu'>
                        <img 
                        onClick={this.toggle}
                        src ="https://i2.wp.com/menupatterns.com/wp-content/uploads/2016/10/hamburger_icon_animation.gif?zoom=2.625&resize=374%2C338" 
                        alt='burger'
                        />
                        </li>
                    </ul>
                </div>
            </nav>
            <div className={`${this.state.menuStatusOpen} side-menu`}>
                <Link to='/user'>
                    <h1>Profile</h1>
                </Link>
                <Link to='/explore'>
                    <h1>Explore</h1>
                </Link>
            </div>
            </>
        )
    }
}

export default feedNav;