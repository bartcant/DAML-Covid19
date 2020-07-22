import { combineReducers } from "redux";

//Import for Covid19test_alt.js and  Start_alt.js

import {
  CONDUCT_CLICKED
} from './actions';

// Reducers  Covid19test_alt.js and  Start_alt.js
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
// Root Reducers Covid19test_alt.js and  Start_alt.js
export default combineReducers({
  conduct: conductReducer
});


/* Code for Covid19test.js

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
}); */
