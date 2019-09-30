import React from 'react';
import axios from 'axios'
import Nav from './Nav'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {updateUser} from '../redux/reducers/userReducer'
import './styles/register.css'





class Register extends React.Component{
    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            username: "",
            password: "",
            shouldRedirect: false,
            clickRegister: false,
            serverErrorMessage: "",
            triedToClick: false,
            isEmployer: false
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    registerClick = () => {
        const {firstName, lastName, email, username, password} = this.state
        if(firstName !== "" && lastName !== "" && email !== "" && username !== "" && password !== ""){
            axios.post('/auth/register', {firstName, lastName, email, username, password}).then(response => {
                console.log("hit")
                this.props.updateUser({firstName, lastName, email, username})
                // this.setState({shouldRedirect: true})
            })
            .catch(err => {
                this.setState({serverErrorMessage: err.response.data.error})
            })
        }else {
            this.setState({triedToClick: true})
        }
    }

    render(){
                

        return (
            <>
            <Nav /> 
            <div className='Register'>
                
            <main >
            


            <div className='container'>
                    Create Your Account 


                {this.state.triedToClick === true ? <h5>Please Fill In All Fields</h5> : null}
                {/* {this.state.serverErrorMessage !== "" ? <h5>{this.state.serverErrorMessage}</h5> : null} */}
                    <div className='input-first'>
                            <input 
                            placeholder='First Name'
                            name="firstName"
                            onChange={this.handleChange}/>
                    </div>

                                <div className='input-last'>
                                    <input 
                                    placeholder='Last Name'
                                    name="lastName"
                                    onChange={this.handleChange}/>
                                </div>

                                            <div className='input-email'>
                                                    <input 
                                                    placeholder='email'
                                                    name='email'
                                                    onChange={this.handleChange}/>
                                            </div>

                                                        <div className='input-user'>
                                                            <input 
                                                            placeholder='Username'
                                                            name='username'
                                                            onChange={this.handleChange}/>
                                                        </div>
                                                        <div className='input-pass'>
                                                            <input placeholder='Password'
                                                            name='password'
                                                            type='password'
                                                            onChange={this.handleChange}/>

                                                        </div>

            <div>
                <Link to='/user'>
                <button className='register-button' onClick={this.registerClick}>Get Started</button>
                </Link>
            </div>
            <Link to='/employer'>
                    <button className='employer-button'>Employer</button>
            </Link>




                        <h6>Already have an account? <Link to='/login'>
                                Sign in here </Link>
                        </h6>
            </div>
        </main>
            </div>

            </>
        )
    }
}
export default connect(undefined, {updateUser})(Register)