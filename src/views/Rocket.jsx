import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRocketById } from "../actions/Rockets";
import Rocket from '../components/Rocket';

/**
 * React hook that returns the rocketCollection record associated with the rocketId.
 * If the record does not exist, it will be fetched.
 * @param {string} rocketId
 */
const useRocketById = (rocketId) => {
  const dispatch = useDispatch();
  const rocketCollection = useSelector(state => state.rocketCollection);
  const selectedRecord = rocketCollection[rocketId];

  useEffect(() => {
    if (!selectedRecord) {
      fetchRocketById(dispatch, { rocketId });
    }
  }, [dispatch, selectedRecord, rocketId]);

  return selectedRecord;
};

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
