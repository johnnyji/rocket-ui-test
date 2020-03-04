import React, { Component } from 'react';
import ConnectedView from './ConnectedView';
import {fetchLaunchesIfNeeded} from "../actions/Launches";
import Launch from '../components/Launch';
import Rocket from './Rocket';

class LaunchesView extends Component {
  componentDidMount() {
    const { dispatch, launchesCollection } = this.props;
    fetchLaunchesIfNeeded({ dispatch, launchesCollection });
  }

  getContent() {
    const {
      launchCollection,
      match: {
        params: {
          flightNumber = '',
          siteId = '',
        }
      }
    } = this.props;

    if (!launchCollection || launchCollection.fetching) {
      return <div> LOADING </div>;
    }

    if (!launchCollection.launches.length) {
      return <div> NO DATA </div>;
    }

    const launches = [];

    for (let i = 0; i < launchCollection.launches.length; i++) {
      const launch = launchCollection.launches[i];
      const key = `${launch.flight_number}-${launch.launch_site.site_id}`;
      // in order to avoid computing URLs in the child based on the presence of
      // the children prop, go ahead and be explicit about the linkTo property
      const props = {
        key,
        launch,
        linkTo: `/launches/${launch.flight_number}/${launch.launch_site.site_id}`,
      };
      if (launch.flight_number.toString() === flightNumber &&
        launch.launch_site.site_id === siteId) {
        props.children = <Rocket rocketId={launch.rocket.rocket_id} />;
        props.linkTo = '/';
      }

      launches.push(<Launch {...props} />);
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
