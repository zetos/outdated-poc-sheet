import {combineReducers} from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import ui from './ui';
import { reducer as formReducer } from 'redux-form';

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  ui,
  form: formReducer,
});

export default todoApp;
