import React from 'react';
import './styles/feedNav.css'
import {Link} from 'react-router-dom'


class FeedNav extends React.Component {
    constructor(){
        super()
        this.state = {
            menuStatusOpen: 'side-menu',
            

        }
    }

    toggle= () => {
        if(this.state.menuOpenStatus === 'side-menu-close' || this.state.menuOpenStatus === 'side-menu'){
            this.setState({menuOpenStatus: 'side-menu-open'})
        }else if (this.state.menuOpenStatus === 'side-menu-open'){
            this.setState({menuOpenStatus: 'side-menu-close'})
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
                        {/* <img 
                        onClick={this.toggle}
                        src ="https://cdn.dribbble.com/users/1011558/screenshots/4615892/hamburger-03.gif" 
                        alt='burger'
                        /> */}
                        </li>
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

export default FeedNav;