import React, { Component } from 'react';
import Details from './Details';


const Launch = (props) => {
  const { launch, rockets } = props;
  const { rocket, details } = launch;
  // const currentRocket = rockets.filter(r => (r.rocket_id === rocket.rocket_id && r.rocket_name === rocket.rocket_name));
  rocket.costPerLaunch = 7000000; // currentRocket.cost_per_launch;


  return (
    <li key={launch.launch_id}>
      <h2> {launch.mission_name} </h2>
      <div> Flight Number: {launch.flight_number} </div>
      <Details
        {...{
          rocket,
          details,
          rocketId: rocket.rocket_id,
        }}
      />
    </li>
  );
};

export default Launch;
