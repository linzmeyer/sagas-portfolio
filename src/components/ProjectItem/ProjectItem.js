import React, { Component } from 'react';
import './ProjectItem.css';

class ProjectItem extends Component {

  render () {
    return (
			<div className="card container">
				<img className="card-img-top" alt='...'/>
				<div className="card-body">
					<div>
						<h5 className="card-title">{ this.props.project.name }</h5>
						<p className="card-text">Poject Description:  { this.props.project.description }</p>
					</div>
					<div className="list-group list-group-flush">
						<li>Completed:  { this.props.project.date_completed }</li>
						<li>Technology Used:  { this.props.project.tag_id }</li>
					</div>
					<div class="card-body" >
						<a href={ this.props.project.website } class="card-link" >Project Website</a>
						<a href={ this.props.project.github } class="card-link" >GitHub Repo</a>
					</div>
				</div>
			</div>
		);
  }
}

export default( ProjectItem );