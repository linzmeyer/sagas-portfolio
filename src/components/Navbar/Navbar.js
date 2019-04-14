import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Route, Link } from "react-router-dom";
// I could not get Link to work w/out importing Route too. But Route causes an
// annoying warning in the console because I'm not using it in this file.

// need this to access this.props.location for conditional rendering
import { withRouter } from 'react-router-dom';

class Navbar extends Component {
  // CONDITIONAL RENDER
    // 1. if current view is admin
    // 2. if current view is home
    // 3. if current view is projects
  renderNavigation = ( currentView ) => {
     // if current view is admin
    if (currentView === '/admin') {
      return( <div><Link to="/" >Home</Link></div> );
    }
    // if current view is home
    else if (currentView === '/') {
      return (
        <div>
          <Link to="/admin" >Admin</Link>
          <Link to="/projects" >projects</Link>
        </div>
      );
    } // if current view is projects
    else if (currentView === '/projects') {
      return ( <div><Link to="/" >Home</Link></div> );
    }
  }

  // use withRouter for props.location
  // use props.location to render this navbar based on current location pathname
  render() {
    return (
      <nav>
        { this.renderNavigation( this.props.location.pathname ) }
      </nav>
    );
  }
}

// This uses withRouter for access to props.location.
export default connect()(withRouter( Navbar ));





// OTHER ROUTING METHOD (w/out using <LINK> | use within Navbar class)
  // Click handlers that route the user with props.history
  // routeToAdmin = () => { this.props.history.push( '/admin' ) }
  // routeToHome = () => { this.props.history.push( '/' ) }
  // routeToProjects = () => { this.props.history.push( '/projects' ) }

  // withRouter would be required to use this.props.history.push() because
  // this component is not a direct child of a <Route />