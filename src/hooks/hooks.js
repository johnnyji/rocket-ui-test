import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRocketById } from '../actions/Rockets';
import { fetchLaunches } from '../actions/Launches';

/**
 * React hook that returns the rocketCollection record associated with the rocketId.
 * If the record does not exist, it will be fetched.
 * @param {string} rocketId
 */
export const useRocketById = (rocketId) => {
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

/**
 * React hook that returns the launchCollection. If the launchCollection does
 * not exist, it will be fetched.
 */
export const useLaunchCollection = () => {
  const dispatch = useDispatch();
  const launchCollection = useSelector(state => state.launchCollection);

  useEffect(() => {
    if (!launchCollection || !launchCollection.fetching) {
      fetchLaunches(dispatch);
    }
  }, [dispatch]);

  return launchCollection;
};
