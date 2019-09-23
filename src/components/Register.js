import React from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import {updateUser} from '../redux/reducers/userReducer'





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
            triedToClick: false
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.value]: e.target.value
        })
    }

    registerClick = () => {
        const {firstName, lastName, email, username, password} = this.state
        if(firstName !== "" && lastName !== "" && email !== "" && username !== "" && password !== ""){
            axios.post('/auth/register').then(response => {
                this.props.updateUser({firstName, lastName, email, username})
                this.setState({shouldRedirect: true})
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
            <Link to='/employer'>
            <button>Employer</button>
            </Link>
            <div>
                {this.state.triedToClick === true ? <h5>Please Fill In All Fields</h5> : null}
                {this.state.serverErrorMessage !== "" ? <h5>{this.state.serverErrorMessage}</h5> : null}
                <input 
                placeholder='First Name'
                name="firstName"
                onChange={this.handleChange}/>
                <input 
                placeholder='Last Name'
                name="lastName"
                onChange={this.handleChange}/>
            </div>
            <div>
                <input 
                placeholder='email'
                name='email'
                onChange={this.handleChange}/>
            </div>
            <div>
                <input 
                placeholder='Username'
                name='username'
                onChange={this.handleChange}/>

                <input placeholder='Password'
                name='password'
                onChange={this.handleChange}/>
            </div>
            <div>
                <button onClick={this.registerClick}>Get Started</button>
            </div>
            
            <h6>Already have an account? <Link to='/login'>
                    Sign in here </Link>
            </h6>
        
            </>

        )
    }
}
export default Register