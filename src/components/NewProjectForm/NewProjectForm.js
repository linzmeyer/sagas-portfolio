import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    // dispact action for POST saga
    this.props.dispatch({ type: 'ADD_PROJECT', payload: this.state.newProject })
    // Reset the state to clear inputs
    this.setState({ ...emptyProject })
  }

  render() {
    return (
      <div>
        <h3>Add a Project:</h3>
        <pre>{ JSON.stringify( this.state ) }</pre>
        <form onSubmit={ this.handleSubmit }>

          <label>Project Name:</label>
          <input
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

          <label>Name:</label>
          <input
            type="text"
            value={ this.state.newProject.thumbnail }
            onChange={ this.handleNameChange( 'thumbnail' ) }
          />
          <br />

          <label>Name:</label> 
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
 
          <label>Name:</label>
          <input
            type="text"
            value={ this.state.newProject.date_completed }
            onChange={ this.handleNameChange( 'date_completed' ) }
          />
          <br />

          <label>Name:</label>
          <input
            type="text"
            value={ this.state.newProject.tag_id }
            onChange={ this.handleNameChange( 'tag_id' ) }
          />

          <button type="submit" >Submit</button>

        </form>
      </div>
    );
  }
}

export default connect()( NewProjectForm );
