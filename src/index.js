import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import axios from 'axios';

// Saga setup
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
const sagaMiddleware = createSagaMiddleware();

// ------ WATCHER SAGA -------
function* watcherSaga() {
  yield takeEvery( 'GET_ALL_PROJECTS', getProjectsList );
  yield takeEvery( 'DELETE_PROJECT', deleteProject );
}

// ------ SAGAS -------

// GET
function* getProjectsList( action ) {
  console.log('Hit the getProjectsList saga', action);
  try {
    const getResponse = yield axios.get('/projects');
    console.log(getResponse);
    const action = { type: 'SET_PROJECTS', payload: getResponse.data };
    // Dispatch an action to our reducers to update our redux store
    yield put( action );
  }
  catch (error) {
    console.log(`Couldn't get projects`, error);
    alert(`Sorry, couldn't get the projects. Try again later`);
  }
}

// DELETE
function* deleteProject( action ) {
  // action.payload should be an number that represents a project id
  // that matches a project id in the database
  console.log('hit the DELETE project saga', action);
  console.log('action.payload:', action.payload);
  try {
    yield axios.delete(`/projects/${action.payload}`)
    // reassign saga action to reducer action
    action = { type: 'GET_PLANTS' };
    yield put( action );
  } catch (error) {
    console.log(`Couldn't delete plant`, error);
    alert(`Sorry, couldn't delete the plant. Try again later`);
  }
}

// ------ REDUCERS -------

// all projects returned from the server
const projects = ( state = [], action ) => {
  if (action.type === 'SET_PROJECTS') {
    return action.payload;
  }
  return state;
}

// the project tags (e.g. 'React', 'jQuery', 'Angular', 'Node.js')
const tags = ( state = [], action ) => {
  if (action.type === 'SET_TAGS') {
    return action.payload;
  }
  return state;
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        projects,
        tags,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware( sagaMiddleware, logger ),
);

// This tells the saga middleware to run the watcherSaga 
// and start monitoring actions
sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
