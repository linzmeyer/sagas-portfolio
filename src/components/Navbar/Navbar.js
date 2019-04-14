import React, { Component } from 'react';
import { connect } from 'react-redux';

// This component is not a direct child of a <Route />,
// so withRouter is required to use this.props.history.push() for react routing
import { withRouter } from 'react-router-dom';

class Navbar extends Component {

  	// Click handlers that route the user
	routeToAdmin = () => { this.props.history.push( '/admin' ) }
	routeToHome = () => { this.props.history.push( '/' ) }
	routeToProjects = () => { this.props.history.push( '/projects' ) }

  // 1. if current view is admin
  // 2. if current view is home
  // 3. if current view is projects
  renderNavigation = ( view ) => {
    if (view === '/admin') {
      return(
        <div>
          <p>Hello Navbar For Admin</p>

        </div>

      );
    }
    else if (view === '/') {
      return (
        <p>Hello Navbar For Home</p>
      );
    }
    else if (view === '/projects') {
      return (
        <p>Hello Navbar For Projects</p>
      );
    }
  }

  render() {
    return (
      <nav>
        { this.renderNavigation( this.props.location.pathname ) }
      </nav>
    );
  }
}

// This uses connect for redux and withRouter for react routing.
export default connect()(withRouter( Navbar ));
