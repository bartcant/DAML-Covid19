import { combineReducers } from "redux";

import {
  CONDUCT_CLICKED
} from './actions';

// Reducers
const conductReducer = (state = {
  citizen: '',
  healthclinic: '',
  contractId: ''
}, action) => {
  if (action.type === CONDUCT_CLICKED) {
    return {
      citizen: action.payload.citizen,
      healthclinic: action.payload.healthclinic,
      contractId: action.payload.contractId
    }
  }

  return state;
};
// Root Reducers
export default combineReducers({
  conduct: conductReducer
});
