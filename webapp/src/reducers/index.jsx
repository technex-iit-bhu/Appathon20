import {combineReducers} from 'redux';

import headerReducer from './header';

const allReducers = combineReducers({
  header: headerReducer,
});

export default allReducers;
