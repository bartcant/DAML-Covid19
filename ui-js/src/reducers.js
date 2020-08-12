import { combineReducers } from "redux";

//Import for Citizeninvite.js

import {
  CONDUCT_CLICKED
} from './actions';

// Reducers  Citizeninvite.js
const conductReducer = (state = {
  citizen: '',
  healthclinic: '',
  contractId: '',
  avcore: '',
}, action) => {
  if (action.type === CONDUCT_CLICKED) {
    if (action.payload.avcore === 'vc') {
      localStorage.setItem('aciti', action.payload.citizen);
      localStorage.setItem('acid', action.payload.contractId);
    }
    return {
      citizen: action.payload.citizen,
      healthclinic: action.payload.healthclinic,
      contractId: action.payload.contractId,
      avcore: action.payload.avcore,
    }
  }

  return state;
};
// Root Reducers for Citizeninvite.js
export default combineReducers({
  conduct: conductReducer
});

