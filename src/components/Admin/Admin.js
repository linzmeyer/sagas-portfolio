import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../Navbar/Navbar';

class Admin extends Component {
	render() {
    return (
      <div>
        <h2>Hello Admin</h2>
        <Navbar />
      </div>
    );
	}
}

const mapReduxStateToProps = reduxState => ({ reduxState })

// This uses connect for redux and withRouter for react routing.
export default connect( mapReduxStateToProps )( Admin );
