import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './view/login/login'
import { ProtectedRoute } from "./view/login/protected.route.js";
import VerticalMenu from './view/layout/verticalmenu';

class App extends Component {
  render() {
    return (
      <Router>
      <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Login} />
          <ProtectedRoute exact path="/listsanpham" component={VerticalMenu} />
        </Switch>
      </Router>
    )
  }
}

export default App
