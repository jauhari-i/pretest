import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import homeReducer from '../pages/Home/reducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  home: homeReducer,
});

export default rootReducer;
