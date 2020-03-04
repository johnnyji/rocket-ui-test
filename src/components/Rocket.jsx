import React, { Fragment } from 'react';

const Rocket = (props) => {
  const { rocket } = props;

  return (
    <Fragment>
      <div> Rocket ID: { rocket.rocket_id } </div>
      <div> Rocket Description: { rocket.description } </div>
      <div> Cost Per Launch: { rocket.cost_per_launch } </div>
    </Fragment>
  );
}

export default Rocket;
