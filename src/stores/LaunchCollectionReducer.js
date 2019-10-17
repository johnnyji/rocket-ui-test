import { ACTIONS } from '../actions/Launches';

const initialState = {
  launches: [],
  currentLaunch: -1,
  fetching: false
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
  [ACTIONS.TOGGLE_LAUNCH]: ({ state, action }) => ({
    ...state,
    currentLaunch: action.payload.launchId
  })
};

export default (state = initialState, action) =>
  actionHandlers[action.type] ? actionHandlers[action.type]({ state, action }) : state;
