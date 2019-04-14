import React, { Component } from 'react';

import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import ProjectsList from '../ProjectsList/ProjectsList';

// Parent: <Route /> in <App />
class Admin extends Component {
	render() {
    return (
      <div>
        <Header />
        <h2>Chase Linzmeyer</h2>
        <ProjectsList />
        <Navbar />
      </div>
    );
	}
}

export default( Admin );