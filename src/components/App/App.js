import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import './App.css';

// import all components used in this component's render
import Admin from '../Admin/Admin';
import Home from '../Home/Home';

class App extends Component {

  render() {
    return (
      // This gives these components react routes for client side routing and SPA functionality.
      <Router>
      	<Route exact path='/admin' component={ Admin } />
				<Route exact path='/' component={ Home }/>
      </Router>
    );
  }
}

export default App;
