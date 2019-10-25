import React, { Component } from 'react';
import ConnectedView from './ConnectedView';
import {fetchLaunchesIfNeeded} from "../actions/Launches";
import {fetchIfNeeded} from '../actions/Rockets';
import Launch from '../components/Launch';

class LaunchesView extends Component {
  componentDidMount() {
    const { dispatch, launchesCollection, rockets } = this.props;
    fetchLaunchesIfNeeded({ dispatch, launchesCollection });
    fetchIfNeeded({dispatch, rockets});
  }

  getContent() {
    const { launchCollection, rockets } = this.props;

    if (!launchCollection || launchCollection.fetching) {
      return <div> LOADING </div>;
    }

    if (!launchCollection.launches.length) {
      return <div> NO DATA </div>;
    }

    const launches = [];

    for (let i = 0; i < launchCollection.launches.length; i += 1) {
      const launch = launchCollection.launches[i];
      launches.push(
        <Launch
          key={`${launch.flight_number}-${launch.launch_date_unix}`}
          {...{

          launch,
          rockets
        }} />
      );

    }

    return <ul>{launches}</ul>;
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
