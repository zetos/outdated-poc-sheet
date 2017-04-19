import {combineReducers} from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import ui from './ui';

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  ui,
});

export default todoApp;
