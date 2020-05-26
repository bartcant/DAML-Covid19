import { combineReducers } from "redux";

import {
  CONDUCT_TEST
} from './actions';

// Reducers
const mathReducer = (state = {number: 0}, action) => {
    if (action.type === CONDUCT_TEST) {
        return {...state, number: state.number + action.payload};
    }
    
    return state;
};
// Root Reducers
export default combineReducers({
   math: mathReducer,
});
