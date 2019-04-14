import React, { Component } from 'react';
import { connect } from 'react-redux';

class AdminProjectItem extends Component {

  // click handler | action for saga | DELETE request
  deleteProject = () => {
    this.props.dispatch(
      { type: 'DELETE_PROJECT', payload: this.props.project.id }
    );
  }
  
  render () {
    return (
			<div>
				<p>Poject Name:  { this.props.project.name }</p>
        <button className='btn btn-danger' onClick={ this.deleteProject } >
          Delete
        </button>
			</div>
		);
  }
}

// need connect to use props.dispatch
export default connect()( AdminProjectItem );