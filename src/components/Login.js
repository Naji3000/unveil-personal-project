import React from 'react';
import axios from 'axios'
import firebase from 'firebase';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import './styles/login.css'
import {updateUser, employerEdit} from '../redux/reducers/userReducer'
import {connect} from 'react-redux'
import {Link} from "react-router-dom"
require('dotenv').config()


firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "unveil-62c36.firebaseapp.com"
})

class Login extends React.Component {
    constructor(){
                super()
                this.state = {
                    username:'',
                    password: '',
                    shouldRedirect: false,
                    triedToClick: false,
                    serverErrorMessage: "",
                    isSignedIn: false
                }
            }
    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        ],
        callbacks: {
            signInSuccess: () => false
        }
    }

    componentDidMount = () => {
        
    firebase.auth().onAuthStateChanged(user => {
        this.setState({ isSignedIn: user })
            // console.log("user", user)
    })
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
        this.props.employerEdit(true);
        
    }
}


    render() {
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
                        
                        
                        <Link  onClick={this.loginClick} className='login-button' to='/user'>
                        <button>Login</button>
                        </Link>
        
                        <div className='register-text'>
                        <h6>Don't have an account yet? <Link to='/'>Register here.</Link></h6>

                        </div>
                        
                        <div className='privacy'>

                        <h6> <Link to ='/privacy'>Privacy Policy</Link></h6>
                        </div>

                        <h6>Or connect with</h6>
                        
                        <div className='google-button'>

                                {
                                this.state.isSignedIn ? (
                            <span>
                                <div className='google-sign-in'>Signed In!</div>

                                <div className='google-sign-out'>
                                
                                <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
                                    
                                </div>
                                <h3 className='google-greeting'>Welcome {firebase.auth().currentUser.displayName}</h3>
                            </span>
                            ) : (
                            <StyledFirebaseAuth
                                uiConfig={this.uiConfig}
                                firebaseAuth={firebase.auth()}
                            />
                            )}

                        </div>
                            
                
        
                </div>
            </main>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        user: reduxState.userReducer.user,
        showEdit: reduxState.userReducer.showEdit
    }
}

export default connect(mapStateToProps, {updateUser, employerEdit}) (Login)
