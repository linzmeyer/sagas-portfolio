import React, { Component } from 'react';

class ProjectItem extends Component {

  render () {
    return (
			<div>
				<img alt='...'/>
				<p>{ this.props.project.name }</p>
				<p>Poject Description:  { this.props.project.description }</p>
				<p>Poject Website:  { this.props.project.website }</p>
				<p>Poject Github: <a href={ this.props.project.github }>Repo</a></p>
				<p>Poject Date Completed:  { this.props.project.date_completed }</p>
				<p>Poject Technology Used:  { this.props.project.name }</p>
			</div>
		);
  }
}

export default( ProjectItem );