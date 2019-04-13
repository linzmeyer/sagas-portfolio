import React, { Component } from 'react';
import { connect } from 'react-redux';
class Plant extends Component {

	deleteProject = () => {
		this.props.dispatch( { type: 'DELETE_PROJECT', payload: this.props.project.id } );
  }
  
  render () {
    return (
			<div>
				<p>Poject Name:  {this.props.project.name}</p>
  			<button onClick={this.deleteProject}>Delete</button >
			</div>
		);
  }
}

export default connect()(Plant);