import {combineReducers, createStore} from 'redux';
import combinedReducer from '../reducers/rootReducer';
// import thunk from 'redux-thunk';
import customMiddleware from '../middleware/middleware';
import { applyMiddleware } from 'redux';
const rootReducer = combineReducers({rootReducer: combinedReducer});

// const store = createStore(rootReducer, applyMiddleware(customMiddleware));
const store = applyMiddleware(customMiddleware)(createStore)(rootReducer);
// const store = applyMiddleware(thunk)(createStore)(rootReducer);

export default store;