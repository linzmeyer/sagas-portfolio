import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProjectItem from '../ProjectItem/ProjectItem';
import AdminProjectItem from '../AdminProjectItem/AdminProjectItem';

// need this to access this.props.location for conditional rendering
import { withRouter } from 'react-router-dom';

// Parents: Admin | Projects
class ProjectsList extends Component {
  componentDidMount() {
    // Trigger saga to get projects... should set value for the projects reducer
    this.props.dispatch( { type: 'GET_ALL_PROJECTS' } );
  }

  // CONDITIONAL RENDER
    // 1. if current view is /project, render all projects' info on cards
    // 2. if current view is /admin, render name and delete button in cards
  renderProjects = ( currentView ) => {
    if ( currentView === '/projects' ) {
      return (
        <div>
          { 
            this.props.reduxState.projects.map( project =>
              <ProjectItem key={ project.id } project={ project } />
            )
          }
        </div>
      );
    } else if ( currentView === '/admin' ) {
      return (
        <div>
          { 
            this.props.reduxState.projects.map( project =>
              <AdminProjectItem key={ project.id } project={ project } />
            )
          }
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        { this.renderProjects( this.props.location.pathname ) }
      </div>
    );
  }
}

// Need reduxState for access to projects reducer
const mapReduxStateToProps = reduxState => ({ reduxState })

// Need withRouter for access to props.location.pathname.
export default connect( mapReduxStateToProps )( withRouter( ProjectsList ));
