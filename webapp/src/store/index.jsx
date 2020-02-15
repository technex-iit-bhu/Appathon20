import {createStore} from 'redux';
import allReducers from '../reducers';

const initialState = {
  user: {
    user_data: {

    }
  }
};

export default createStore(allReducers, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
