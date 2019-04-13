import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// Saga setup
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
const sagaMiddleware = createSagaMiddleware();

// ------ WATCHER SAGA -------
function* watcherSaga() {
}

// ------ SAGAS -------


// ------ REDUCERS -------

// Used to store projects returned from the server
const projects = (state = [], action) => {
  switch (action.type) {
    case 'SET_PROJECTS':
      return action.payload;
    default:
      return state;
  }
}

// Used to store the project tags (e.g. 'React', 'jQuery', 'Angular', 'Node.js')
const tags = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        projects,
        tags,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// This tells the saga middleware to run the watcherSaga 
// and start monitoring actions
sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
