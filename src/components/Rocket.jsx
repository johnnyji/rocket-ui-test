import React, { Component } from 'react';
import RocketService from '../services/RocketService';

class Rocket extends Component {
  componentDidMount() {
    // RocketService.get(this.props.rocketId)
    //   .then((data) => {
    //     console.log(data);
    //   });
  }

  render() {
    return (
      <div>
        <div> id </div>
        <div> cost </div>
        <div> details </div>
      </div>
      
    );
  }
}

export default Rocket;
