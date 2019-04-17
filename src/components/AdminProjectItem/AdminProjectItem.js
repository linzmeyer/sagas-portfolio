import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AdminProjectItem.css';

class AdminProjectItem extends Component {

  // click handler | action for saga | DELETE request
  deleteProject = () => {
    this.props.dispatch(
      { type: 'DELETE_PROJECT', payload: this.props.project.id }
    );
  }
  
  render () {
    return (
			<div className="card">
				<h5>{ this.props.project.name }</h5>
        <button className='btn btn-danger' onClick={ this.deleteProject } >
          Delete
        </button>
			</div>
		);
  }
}

// need connect to use props.dispatch
export default connect()( AdminProjectItem );