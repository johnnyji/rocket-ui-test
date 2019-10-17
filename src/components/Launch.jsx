import React, { Component } from 'react';
import Rocket from "./Rocket";

class Launch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rocket: {}
    };
  }

  

  handleOnGetRocketInfo = () => {
    
  }

  renderContent = () => {
    const { flight_number: number, details, rocket } = this.props.launch;

    return (
      <div className="launch-content">
        <div> Flight Number: { number } </div>
        <div>Launch details: {details}</div>
        <Rocket rocket={this.state.rocket} />
      </div>
    );
  }

  render() {
    const { flight_number: number, mission_name: name } = this.props.launch;
    
    return (
      <li onClick={() => this.props.onToggleLaunch(number)}>
        <h2> { name } </h2>
        {this.props.show ? this.renderContent() : null}
      </li>
    );
  }
}

export default Launch;
