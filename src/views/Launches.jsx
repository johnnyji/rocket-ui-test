import React, { Component } from 'react';
import ConnectedView from './ConnectedView';
import { fetchLaunches } from "../actions/Launches";
import Launch from '../components/Launch';
//due to time constraints use service directly
import rocketService from 'services/rocketService';

class LaunchesView extends Component {
  state = {
    expanded_launch: null,
    rocket_details: null,
  };

  //again due to time constraints, did this quick and dirty
  _handleLaunchToggle = (index) => {
    if (this.state.expanded_launch === index) {
      this.setState({ expanded_launch: null });
    } else {
      const launch = this.props.launchCollection.launches[index];

      this.setState({ expanded_launch: index, rocket_details: null });
      this._fetchRocketDetails(launch.rocket.rocket_id);
    }
  };

  _fetchRocketDetails = (rocket_id) => {
    rocketService.get(rocket_id).then((rocket_details) => {
      this.setState({ rocket_details });
    });
  };

  componentDidMount() {
    //XXX:deciding whether or not to fetch is a business logic concern.  Should not be an action.
    if (!this.props.launchesCollection) {
      this.props.dispatch(fetchLaunches());
    }
  }

  getContent() {
    const { launchCollection } = this.props;

    if (!launchCollection || launchCollection.fetching) {
      return <div> LOADING </div>;
    }

    if (!launchCollection.launches.length) {
      return <div> NO DATA </div>;
    }

    //XXX: there doesnt seem to be a unique enough attribute for launches.  No id and flight number
    //appears to have one instance of a duplicate.
    return (
      <ul className="launches">
        {
          launchCollection.launches.map((launch, index) => (
            <Launch {...launch}
              index={index}
              key={launch.flight_number + "-" + index}
              is_expanded={this.state.expanded_launch === index}
              rocket_details={this.state.rocket_details}
              onToggle={this._handleLaunchToggle} />
          ))
        }
      </ul>
    );
  }

  render() {
    return (
      <div>
        <h2> SpaceX launches </h2>
        {this.getContent()}
      </div>
    );
  }
}

export default ConnectedView(LaunchesView, 'launches');
