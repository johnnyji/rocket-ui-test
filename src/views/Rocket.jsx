import React from 'react';
import Rocket from '../components/Rocket';
import { useRocketById } from '../hooks/hooks';

const RocketView = (props) => {
  const {
    rocketId
  } = props;

  const record = useRocketById(rocketId);

  if (!record || record.fetching) {
    return (
      <div>LOADING</div>
    );
  }

  return (
    <Rocket rocket={record.rocket} />
  );
}

export default RocketView;
