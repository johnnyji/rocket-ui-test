import React, { Component } from 'react';
import Rocket from 'components/Rocket.js';

class Launch extends Component {
  _handleToggle = () => {
    this.props.onToggle(this.props.index);
  };

  render () {
    const { mission_name, flight_number, rocket, is_expanded=false } = this.props;

    return (
      <li>
        <h2>
          <span
            className="toggle-button"
            onClick={this._handleToggle} >
            { is_expanded ? "-" : "+" }
          </span>

          <span>{ mission_name }</span>
        </h2>
        <div className="flight-number">Flight Number: { flight_number }</div>

        <div onClick={this._handleToggle}>
          { is_expanded && <Rocket rocket_id={rocket.rocket_id} {...this.props.rocket_details} /> }
        </div>
      </li>
    );
  }
};

export default Launch;
