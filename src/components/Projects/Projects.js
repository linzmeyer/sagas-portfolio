import React, { Component } from 'react';

import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import ProjectsList from '../ProjectsList/ProjectsList';

// Parent: <Route /> in <App />
class Projects extends Component {
	render() {
    return (
      <div className="Projects" >
        <Header />
        <h2>Chase Linzmeyer</h2>
        <ProjectsList />
        <Navbar />
      </div>
    );
	}
}

export default( Projects );