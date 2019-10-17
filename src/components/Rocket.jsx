import React, { Component } from 'react';
import RocketService from '../services/RocketService';

class Rocket extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rocket: {
        id: "",
        cost_per_launch: "",
        description: ""
      }
    }
  }

  componentDidMount() {
    //If rocket data has been cached, use it. Otherwise, fetch it and cache it to the launch
    if (this.props.rocket.id) {
      this.setState({ rocket: this.props.rocket });
    } else {
      RocketService.get(this.props.rocketId)
      .then(({ data }) => {
        this.setState({
          rocket: data
        }, this.props.onUpdateLaunchRocket(data));
      });
    }
  }

  renderRocketDetails = () => (
      <div>
        <div>{`Rocket ID: ${this.state.rocket.id}`}</div>
        <div>{`Cost per launch: $${this.state.rocket.cost_per_launch}`}</div>
        <div>{`Rocket description: ${this.state.rocket.description}`}</div>
      </div>
  );

  render() {
    return (
      <div>
        <h3>Rocket details...</h3>
        {this.state.rocket.id === "" && <div>Loading...</div>}
        {this.state.rocket.id !== "" && this.renderRocketDetails()}
      </div>
    );
  }
}

export default Rocket;
