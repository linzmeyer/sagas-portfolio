import React, { Component } from 'react';
import { connect } from 'react-redux';

class Navbar extends Component {

  	// Click handlers that route the user
	routeToAdmin = () => { this.props.history.push( '/admin' ) }
	routeToHome = () => { this.props.history.push( '/' ) }
	routeToView1 = () => { this.props.history.push( '/projects' ) }

  // try to conditionally render using current view
  // find current view by using this.props.history...
  renderNavBar = ( view ) => {
    if (view === 'Admin') {
      <p>Hello Navbar For Admin</p>
    }
    else if (view === 'Home') {
      <p>Hello Navbar For Home</p>
    }
    else if (view === 'Projects') {
      <p>Hello Navbar For Projects</p>
    }
  }

  render() {
    return (
      <nav>
        { this.renderNavBar( this.props.history ) }
      </nav>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
})

export default connect(mapReduxStateToProps)(Navbar);