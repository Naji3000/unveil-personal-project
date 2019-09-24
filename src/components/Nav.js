import React from 'react'
import './styles/Nav.css'
class Nav extends React.Component {
    constructor(){
        super()
        this.state = {
            menuOpenStatus: 'side-menu'
        }
    }
    render(){

        return (
            <>
            <div className='logo'>

                <h1 className='title'> unveil </h1>

                </div>


                <h3 className='slogan'> Open Your Creative Mind </h3>
                
          
            </>
        )
    }
}

export default Nav;