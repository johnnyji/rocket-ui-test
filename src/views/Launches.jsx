import React, { Component } from 'react';
import ConnectedView from './ConnectedView';
import {fetchLaunchesIfNeeded, setActiveLaunch} from "../actions/Launches";
import {fetchIfNeeded} from '../actions/Rockets';
import Launch from '../components/Launch';

class LaunchesView extends Component {
  componentDidMount() {
    const { dispatch, launchesCollection, rockets } = this.props;
    fetchIfNeeded({dispatch, rockets});
    fetchLaunchesIfNeeded({ dispatch, launchesCollection });
  }

  render() {
    const { launchCollection, rockets, dispatch } = this.props;

    if (!launchCollection || launchCollection.fetching) {
      return <div> LOADING </div>;
    }

    if (!launchCollection.launches.length) {
      return <div> NO DATA </div>;
    }

    const launches = [];

    for (let i = 0; i < launchCollection.launches.length; i += 1) {
      const launch = launchCollection.launches[i];
      const active = (launchCollection.activeLaunchIndex === i);
      const setActive = function(num) {
        const enclosed = function(){
          dispatch(setActiveLaunch(num));
        };
        return enclosed;
      }(i);

      launches.push(
        <Launch
          isActive={active}
          key={`${launch.flight_number}-${launch.launch_date_unix}`}
          index={i}
          dispatch
          handleClick={ setActive }
          {...{

            launch,
            rockets
          }} />
      );
    }

    return (
      <div>
        <h2> SpaceX launches </h2>
        <p>Active: {launchCollection.activeLaunchIndex}</p>
        <ul>{launches}</ul>
      </div>
    );
  }
}

export default ConnectedView(LaunchesView, 'launches');
