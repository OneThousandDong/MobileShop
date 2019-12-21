import React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';

class Logout extends React.Component{
  constructor(props){
    super(props);
    localStorage.removeItem("token")

  }
  render(){
  return (
    <div>
      <Link to="/">Logouttt</Link>
    </div>
  )
  }
}     

export default Logout;




