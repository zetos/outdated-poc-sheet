import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import todoApp from './reducers';
import App from './components/App';

const initialState = {
  ui: {
    drawerActive: false,
    drawerPinned: false,
    sidebarPinned: false,
  },
};

const store = createStore(todoApp, initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
