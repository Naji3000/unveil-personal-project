import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './components/Login'
import Register from "./components/Register"
import Employer from './components/Employer'
import Freelancer from './components/Freelancer'



export default (
    <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/employer' component={Employer}/>
        <Route path='/user' component={Freelancer}/>
        <Route exact path='/' component={Register}/>
        <Route />
        <Route />
        <Route />
        <Route />
    </Switch>
)