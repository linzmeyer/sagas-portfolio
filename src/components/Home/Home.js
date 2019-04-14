import React, { Component } from 'react';
import Header from '../Header/Header';

// Parent: <Route /> in <App />
class Home extends Component {
	render() {
    return (
      <div>
        <Header />
      </div>
    );
	}
}

export default( Home );