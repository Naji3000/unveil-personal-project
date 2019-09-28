import React from 'react';
import './App.css'
import axios from 'axios'
import {connect} from 'react-redux'
import {updateUser} from './redux/reducers/userReducer'
import routes from './routes'
import Nav from './components/Nav'


class App extends React.Component{
  
  componentDidMount() {
    axios.get("/auth/user").then(response => { 
      this.props.updateUser(response.data); 
    })
  }

  render(){

    return (
      <>
        
        {/* <Nav /> */}
        {routes}
      </>
    );
  }
  }

export default connect(undefined, {updateUser})(App);

