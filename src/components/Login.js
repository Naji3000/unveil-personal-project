import React from 'react';
import axios from 'axios'
import './styles/login.css'
import {updateUser} from '../redux/reducers/userReducer'
import {connect} from 'react-redux'
import {Link} from "react-router-dom"

class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            username:'',
            password: '',
            shouldRedirect: false,
            triedToClick: false,
            serverErrorMessage: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    loginClick = () => {
        const {username, password} = this.state
        if(username === "" && password === ""){
            this.setState({triedToClick: true})
        } else {
            axios.post('/auth/login', {username, password})
            .then(response => {
                console.log("fire");
                this.props.updateUser(response.data)
                this.setState({shouldRedirect: true})
            }).catch(err => {
                this.setState({serverErrorMessage: err.response.data.error})
            })
        }

    }

    if


    render(){

        console.log(this.props)

        return (
            <>
            <div className='container-2'>
                
                            <div className="input-login">
                                <input 
                                placeholder='Username'
                                name='username'
                                onChange={this.handleChange}/>
                            </div>
                            
                                        <div>
                                            <input 
                                            placeholder='Password'
                                            name='password'
                                            type='password'
                                            onChange={this.handleChange}/>

                                        </div>
                        
                    <div>
                        <Link className='login-button' to='/user'>
                        <button onClick={this.loginClick}>Login</button>
                        </Link>
                        
                    </div>

            </div>

            </>

        )
    }
}

const mapStateToProps = reduxState => {
    return {
        user: reduxState.userReducer.user
    }
}

export default connect(mapStateToProps, {updateUser}) (Login)