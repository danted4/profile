import {combineReducers, createStore} from 'redux';
import homeReducer from '../reducers/homeReducer';
import portfolioReducer from '../reducers/portfolioReducer';
// import thunk from 'redux-thunk';
import customMiddleware from '../middleware/middleware';
import { applyMiddleware } from 'redux';
const rootReducer = combineReducers({
    homeReducer: homeReducer,
    portfolioReducer :  portfolioReducer,
});

// const store = createStore(rootReducer, applyMiddleware(customMiddleware));
const store = applyMiddleware(customMiddleware)(createStore)(rootReducer);
// const store = applyMiddleware(thunk)(createStore)(rootReducer);

export default store;