import RocketService from '../services/RocketService';

export const ACTIONS = {
  REQUEST_ROCKET_BY_ID: 'REQUEST_ROCKET_BY_ID',
  RECEIVE_ROCKET_BY_ID: 'RECEIVE_ROCKET_BY_ID'
};

export const requestRocketById = (id) => ({
  type: ACTIONS.REQUEST_ROCKET_BY_ID,
  payload: id
});

const receiveRocketById = response => ({
  type: ACTIONS.RECEIVE_ROCKET_BY_ID,
  payload:  response.data
});

export const fetchRocketById = (dispatch, ownProps) => {
  const { rocketId } = ownProps;
  dispatch(requestRocketById(rocketId));
  return RocketService.getById(rocketId).then(response => dispatch(receiveRocketById(response)));
};
