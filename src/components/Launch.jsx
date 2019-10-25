import React from 'react';
import Details from './Details';


const Launch = (props) => {
  const { launch, handleClick, rockets} = props; // isActive - condition to wrap rendering of Details
  const { rocket, details } = launch;
  rocket.costPerLaunch = 'unknown';

  if(rockets && Array.isArray(rockets)) {
    const currentRocket = rockets.filter(r => (r.rocket_id === rocket.rocket_id && r.rocket_name === rocket.rocket_name));
    rocket.costPerLaunch = currentRocket.cost_per_launch;
    rocket.description = currentRocket.description;
  }

  return (
    <li key={launch.launch_id}>
      <a onClick={() => handleClick()}>
        <h2> {launch.mission_name} </h2>
        <div> Flight Number: {launch.flight_number} </div>

        <Details
          {...{
            rocket,
            details,
            rocketId: rocket.rocket_id,
          }}
        />

      </a>
    </li>
  );
};

export default Launch;
