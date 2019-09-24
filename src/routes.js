import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './components/Login'
import Register from "./components/Register"
import Employer from './components/Employer'
import Freelancer from './components/Freelancer'
import Explore from './components/Explore'
import Feed from './components/Feed'

export default (
    <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/employer' component={Employer}/>
        <Route path='/user' component={Freelancer}/>
        <Route path='/explore' component={Explore}/>
        <Route path='/feed' component={Feed}/>
        <Route exact path='/' component={Register}/>
        <Route />
        <Route />
    </Switch>
)