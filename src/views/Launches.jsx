import React, { Component } from 'react';
import ConnectedView from './ConnectedView';
import {fetchLaunchesIfNeeded, toggleLaunch} from "../actions/Launches";
import Launch from '../components/Launch';

class LaunchesView extends Component {
  componentDidMount() {
    const { dispatch, launchesCollection } = this.props;
    fetchLaunchesIfNeeded({ dispatch, launchesCollection });
  }

  handleOnToggleLaunch = (id) => {
    toggleLaunch({dispatch: this.props.dispatch, launchId: id});
  };

  getContent = () => {
    const { launchCollection } = this.props;

    if (!launchCollection || launchCollection.fetching) {
      return <div> LOADING </div>;
    }

    if (!launchCollection.launches.length) {
      return <div> NO DATA </div>;
    }

    return <ul>
      {launchCollection.launches.map((launch) => (
        <Launch 
          key={launch.flight_number}
          launch={launch}
          show={launch.flight_number === launchCollection.currentLaunch}
          onToggleLaunch={this.handleOnToggleLaunch}
        />
      ))}
    </ul>
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
