import { ACTIONS } from '../actions/Rockets';

/**
 * The Rockets store is a record of rocketIds and the status of that record.
 * For example: {
 *   1: {
 *     fetching: true
 *   },
 *   2: {
 *     fetching: false,
 *     rocket: {
 *       ...(rocket props)
 *     }
 *   }
 * }
 *
 * This allows us to track the status of any specific request
 */
const initialState = {};

const actionHandlers = {
  [ACTIONS.REQUEST_ROCKET_BY_ID]: ({ state, action }) => ({
    ...state,
    [action.payload]: {
      fetching: true
    }
  }),
  [ACTIONS.RECEIVE_ROCKET_BY_ID]: ({ state, action }) => ({
    ...state,
    [action.payload.rocket_id]: {
      fetching: false,
      rocket: action.payload
    }
  })
};

export default (state = initialState, action) =>
  actionHandlers[action.type] ? actionHandlers[action.type]({ state, action }) : state;
