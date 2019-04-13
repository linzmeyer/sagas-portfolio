import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectItem from '../ProjectItem/ProjectItem';

class ProjectsList extends Component {
  componentDidMount() {
    // Try to trigger our saga to get projects... should set our reducer (projects)
    this.props.dispatch( { type: 'GET_ALL_PROJECTS' } );
  }

  render() {
    return (
      <div>
        <h3>This is the Project list</h3>
        <pre>{JSON.stringify(this.props.reduxState.projects)}</pre>
          { 
            this.props.reduxState.projects.map( project =>
              <ProjectItem key={project.id} project={project} />
            )
          }
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
})

export default connect(mapReduxStateToProps)(ProjectsList);