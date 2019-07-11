import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './component/App';
import tasksReducers, { initialState } from './reducers/tasks';
import * as serviceWorker from './serviceWorker';

const store = createStore(tasksReducers, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

serviceWorker.unregister();
