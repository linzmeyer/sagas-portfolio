import React, { Component } from 'react';
import { connect } from 'react-redux';

import validate from '../../DRY_Functions/validate';

const emptyProject = {
  name: '',
  description: '',
  thumbnail: '',
  website: '',
  github: '',
  date_completed: '',
  tag_id: ''
}

class NewProjectForm extends Component {

  state = {
    newProject: emptyProject
  }

  componentDidMount() {
    // Trigger saga to get tags... should set value for the tags reducer
    // Use reduxState.tags.length for 'technology used' input max
    this.props.dispatch( { type: 'GET_ALL_TAGS' } );
  }
  
  handleNameChange = propertyName => {
    return (event) => {
      this.setState({
        newProject: {
          ...this.state.newProject,
          [propertyName]: event.target.value,
        }
      });
    }
  }

  // click handler | action for saga | POST request
  handleSubmit = event => {
    event.preventDefault();

    console.log( 'validating:', this.state.newProject );
		// User input validation (returns T/F value)
    let isValidInput = validate( this.state.newProject );
    // if input is not valid, exit handleSubmit
		if ( isValidInput === false ) {
			return;
		}

    // dispact action for POST saga
    this.props.dispatch({ type: 'ADD_PROJECT', payload: this.state.newProject })
    // Reset the state to clear inputs
    this.setState({ newProject: emptyProject });
    document.getElementById('in-1').focus();
  }

  render() {
    return (
      <div>
        <h3>Add a Project:</h3>
        <pre>{ JSON.stringify( this.state ) }</pre>
        <form onSubmit={ this.handleSubmit }>

          <label>Project Name:</label>
          <input
            id="in-1"
            type="text"
            value={ this.state.newProject.name }
            onChange={ this.handleNameChange( 'name' ) }
          />
          <br />
          
          <label>Description:</label>
          <input
            type="text"
            value={this.state.newProject.description}
            onChange={this.handleNameChange('description')}
          />
          <br />

          <label>Thumbnail:</label>
          <input
            type="text"
            value={ this.state.newProject.thumbnail }
            onChange={ this.handleNameChange( 'thumbnail' ) }
          />
          <br />

          <label>Website:</label> 
          <input
            type="text"
            value={ this.state.newProject.website }
            onChange={ this.handleNameChange( 'website' ) }
          />
          <br />

          <label>Name:</label>
          <input
            type="text"
            value={ this.state.newProject.github }
            onChange={ this.handleNameChange( 'github' ) }
          />
          <br />
 
          <label>GitHub:</label>
          <input
            type="text"
            value={ this.state.newProject.date_completed }
            onChange={ this.handleNameChange( 'date_completed' ) }
          />
          <br />

          <label>Technology Used:</label>
          <input
            type="number" min="1" max={this.props.reduxState.tags.length}
            value={ this.state.newProject.tag_id }
            onChange={ this.handleNameChange( 'tag_id' ) }
          />
          <br />

          <button type="submit" className="btn btn-primary">
            Submit
          </button>

        </form>
      </div>
    );
  }
}

// Need reduxState for access to tags reducer
const mapReduxStateToProps = reduxState => ({ reduxState })

// need connect to use props.dispatch
export default connect( mapReduxStateToProps )( NewProjectForm );
