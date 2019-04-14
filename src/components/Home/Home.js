import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';


class Home extends Component {
	render() {
    return (
      <div>
        <h2>Hello Home</h2>
        <Navbar />
      </div>
    );
	}
}

export default( Home );