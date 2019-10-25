import { ACTIONS } from '../actions/Launches';

const initialState = {
  launches: [],
  fetching: false,
  activeLaunchIndex: -1,
};

const actionHandlers = {
  [ACTIONS.REQUEST_LAUNCHES]: ({ state }) => ({
    ...state,
    fetching: true
  }),
  [ACTIONS.RECEIVE_LAUNCHES]: ({ state, action }) => ({
    ...state,
    fetching: false,
    launches: [...state.launches, ...action.payload.launches]
  }),
  [ACTIONS.SET_ACTIVE_LAUNCH]: ({ state, activeLaunchIndex }) => ({
    ...state,
    activeLaunchIndex,
  }),

};

export default (state = initialState, action) =>
  actionHandlers[action.type] ? actionHandlers[action.type]({ state, action }) : state;
