import React from 'react';

const Details = (props) => {
  const {rocketId, details, rocket} = props;

  return (
    <div>
      {rocketId}
      <p><label>Cost/Launch:</label>{rocket.costPerLaunch}</p>
      <p><label>Launch Details:</label>{details}</p>
      <p><label>Rocket Description:</label>{rocket.description}</p>
    </div>
  );
};

export default Details;
