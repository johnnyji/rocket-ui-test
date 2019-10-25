import LaunchService from '../services/LaunchService';

export const ACTIONS = {
  REQUEST_LAUNCHES: 'REQUEST_LAUNCHES',
  RECEIVE_LAUNCHES: 'RECEIVE_LAUNCHES',
  SET_ACTIVE_LAUNCH: 'SET_ACTIVE_LAUNCH'
};

export const requestLaunches = () => ({
  type: ACTIONS.REQUEST_LAUNCHES
});

const receiveLaunches = response => ({
  type: ACTIONS.RECEIVE_LAUNCHES,
  payload: {
    launches: response.data
  }
});

export const fetchLaunches = dispatch => {
  dispatch(requestLaunches());
  return LaunchService.get().then(response => dispatch(receiveLaunches(response)));
};

const shouldFetchLaunches = launchCollection => !launchCollection || !launchCollection.fetching;

export const fetchLaunchesIfNeeded = ({ dispatch, launchCollection }) =>
  shouldFetchLaunches(launchCollection) && fetchLaunches(dispatch);

export const setActiveLaunch = (index) => ({
  type: ACTIONS.SET_ACTIVE_LAUNCH,
  payload: {
    activeLaunchIndex: index,
  }
});

export const handleActiveLaunch = (index) => {
  setActiveLaunch(index);
};

