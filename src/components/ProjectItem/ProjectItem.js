import React, { Component } from 'react';
class ProjectItem extends Component {

  render () {
    return (
			<div>
				<p>Poject Name:  {this.props.project.name}</p>
			</div>
		);
  }
}

export default(ProjectItem);