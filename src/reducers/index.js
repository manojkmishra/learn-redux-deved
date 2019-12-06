import counterReducer from './counter';
import loggedReducer from './isLogged';
import {combineReducers} from 'redux';

const allReducer = combineReducers({counter: counterReducer, isLogged: loggedReducer}) ; //fn with an object
//can be written as -combineReducers({counterReducer: counterReducer, loggedReducer: loggedReducer}) 
//or combineReducers({ counterReducer, loggedReducer}) 
export default allReducer;