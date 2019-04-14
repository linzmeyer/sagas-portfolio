import React, { Component } from 'react';

import Navbar from '../Navbar/Navbar';

// need this to access this.props.location for conditional rendering
import { withRouter } from 'react-router-dom';

class Header extends Component {

	// 1. if current view is admin
	// 2. if current view is home
	// 3. if current view is projects
	renderHeader = ( currentView ) => {
			if (currentView === '/admin') {
				return( <h1>ADMIN</h1> );
			} else if (currentView === '/') {
				return( <h1>HOME</h1> );
			} else if (currentView === '/projects') {
				return( <h1>PROJECTS</h1> );
			}
		}

	render() {
		return (
			<div>
				{ this.renderHeader( this.props.location.pathname ) }
				<Navbar />
			</div>
		);
	}
}

// This uses withRouter for access to props.location.
export default( withRouter( Header ));