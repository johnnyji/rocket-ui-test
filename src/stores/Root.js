import { createStore, combineReducers, applyMiddleware } from 'redux';
import launchCollection from './LaunchCollectionReducer';
import Thunk from 'redux-thunk';

const rootReducer = combineReducers({
  launchCollection
});

const createStoreWithMiddleware = applyMiddleware(Thunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);

export default store;
