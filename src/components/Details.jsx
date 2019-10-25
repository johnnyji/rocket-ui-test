import React from 'react';

const Details = (props) => {
  const {rocketId, details, rocket} = props;

  return (
    <div>
      {rocketId}
      <p>{details}</p>
      <p>{rocket.description}</p>
    </div>
  );
};

export default Details;
