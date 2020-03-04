import React from 'react';
import Launch from '../components/Launch';
import Rocket from './Rocket';
import { useLaunchCollection } from '../hooks/hooks';

const LaunchesView = (props) => {
  const {
    match: {
      params: {
        flightNumber = '',
        siteId = '',
      }
    }
  } = props;
  const launchCollection = useLaunchCollection();

  if (!launchCollection || launchCollection.fetching) {
    return <div> LOADING </div>;
  }

  if (!launchCollection.launches.length) {
    return <div> NO DATA </div>;
  }

  return (
    <ul>
      {
        launchCollection.launches.map((launch) => {
          // use flight_number and launch_site to create a unique key for the UI
          // this is useful for the key in the list of components AND to create
          // an exclusive relationship from the router props
          const selected = launch.flight_number.toString() === flightNumber &&
            launch.launch_site.site_id === siteId;
          const key = `${launch.flight_number}-${launch.launch_site.site_id}`;
          const expandLink = `/launches/${launch.flight_number}/${launch.launch_site.site_id}`;
          return (
            <Launch
              launch={launch}
              key={key}
              linkTo={selected ? '/' : expandLink}
            >
              {
                // when the item is selected, give it a rocket child
                selected ? <Rocket rocketId={launch.rocket.rocket_id} /> : null
              }
            </Launch>
          );

        })
      }
    </ul>
  );
}

const LaunchesWrapper = (props) => {
  const { children, ...remainingProps } = props;
  return (
    <div>
      <h2> SpaceX launches </h2>
      <LaunchesView {...remainingProps} />
    </div>
  );
};

export default LaunchesWrapper;
