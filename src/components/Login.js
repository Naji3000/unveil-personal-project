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
            <main className='container-2'>
                <div className='box'>
                    
                    <div className='login-greeting'>
                    <h3>Hi There!</h3>
                    </div>

                    <div className='login-greeting-2'>

                    <h5> We're happy to see you again.</h5>

                    </div>



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
                        


                    
                        <Link className='login-button' to='/user'>
                        <button onClick={this.loginClick}>Login</button>
                        </Link>

                        <div className='register-text'>
                        <h6>Don't have an account yet? <Link to='/'>Register here.</Link></h6>

                        </div>
                        <h6>Or connect with</h6>

                            <button className='google-button'>Google</button>
                

                </div>
            </main>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        user: reduxState.userReducer.user
    }
}

export default connect(mapStateToProps, {updateUser}) (Login)