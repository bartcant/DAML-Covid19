import { createStore, combineReducers } from './node_modules/redux';
import { reducer as reduxFormReducer } from './node_modules/redux-form';

const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
});
const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer);

export default store;
