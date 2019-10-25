import RocketService from '../services/RocketService';

export const ACTIONS = {
  REQUEST: 'REQUEST',
  RECEIVE: 'RECEIVE'
};

export const request = () => ({
  type: ACTIONS.REQUEST
});

const receive = response => ({
  type: ACTIONS.RECEIVE,
  payload: {
    rockets: response.data
  }
});

export const fetch = dispatch => {
  dispatch(request());
  return RocketService.get().then(response => dispatch(receive(response)));
};

const shouldFetch = data => !data || !data.fetching;

export const fetchIfNeeded = ({ dispatch, data }) =>
  shouldFetch(data) && fetch(dispatch);
