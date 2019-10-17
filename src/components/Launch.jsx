import React, { Component } from 'react';
import Rocket from "./Rocket";
import RocketService from "../services/RocketService";

class Launch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rocket: {}
    }
  }

  handleUpdateLaunchRocket = (rocket) => this.setState({ rocket });

  renderContent = () => {
    const { flight_number: number, details, rocket } = this.props.launch;

    return (
      <div className="launch-content">
        <div> Flight Number: { number } </div>
        <div>Launch details: {details}</div>
        <Rocket
          rocketId={rocket.rocket_id}
          rocket={this.state.rocket}
          onUpdateLaunchRocket={this.handleUpdateLaunchRocket}
        />
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
