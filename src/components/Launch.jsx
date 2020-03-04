import React from 'react';
import { Link } from 'react-router-dom';

const Launch = (props) => {
  const {
    launch,
    children,
    linkTo
  } = props;

  return (
    <li>
      <Link to={linkTo}>
        <h2> { launch.mission_name } </h2>
      </Link>
      <div> Flight Number: { launch.flight_number } </div>
      { children }
    </li>
  );
}

export default Launch;
