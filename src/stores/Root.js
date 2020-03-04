import { createStore, combineReducers } from 'redux';
import launchCollection from './LaunchCollectionReducer';
import rocketCollection from './RocketsCollectionReducer';

const rootReducer = combineReducers({
  launchCollection,
  rocketCollection
});

const store = createStore(rootReducer);

export default store;
