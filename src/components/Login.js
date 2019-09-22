import React from 'react';
import axios from 'axios'

class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            username:'',
            password: ''
        }
    }


    render(){
        return (
            <>
            <div>
                <input placeholder='Username'/>
                <input placeholder='Password'/>
            </div>
            </>

        )
    }
}

export default Login