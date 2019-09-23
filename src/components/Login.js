import React from 'react';
import axios from 'axios'
import {updateUser} from '../redux/reducers/userReducer'

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
            [e.target.value]: e.target.value
        })
    }

    loginClick= () => {
        const {username, password} = this.state
        if(username === "" && password === ""){
            this.setState({triedToClick: true})
        } else {
            axios.post('/auth/login', {username, password})
            .then(response => {
                this.props.updateUser(response.data)
                this.setState({shouldRedirect: true})
            }).catch(err => {
                this.setState({serverErrorMessage: err.response.data.error})
            })
        }

    }


    render(){
        return (
            <>
            
            <div>
                <input 
                placeholder='Username'
                name='username'
                onChange={this.handleChange}/>

                <input 
                placeholder='Password'
                name='password'
                onChange={this.handleChange}/>
            </div>

            <div>
                <button onClick={()=> this.loginClick}>Login</button>
            </div>
            </>

        )
    }
}

export default Login