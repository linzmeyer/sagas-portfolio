import React, { Component } from 'react';

import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import ProjectsList from '../ProjectsList/ProjectsList';
import NewProjectForm from '../NewProjectForm/NewProjectForm';

// Parent: <Route /> in <App />
class Admin extends Component {
	render() {
    return (
      <div>
        <Header />
        <NewProjectForm />
        <ProjectsList />
        <Navbar />
      </div>
    );
	}
}

export default Admin;
