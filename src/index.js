import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'; // bootstrap styling
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; // allows us to us redux throughout app
import logger from 'redux-logger'; // middleware to track dispatches in console
import axios from 'axios'; // allows us to make http requests
import App from './components/App/App.js'; // import component to be wrapped by provider

// import style
import './index.css';

// Saga setup
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
const sagaMiddleware = createSagaMiddleware();

// ------ WATCHER SAGA ---------------------------------------------------------
function* watcherSaga() {
  yield takeEvery( 'GET_ALL_PROJECTS', getProjectsList );
  yield takeEvery( 'GET_ALL_TAGS', getTags );
  yield takeEvery( 'DELETE_PROJECT', deleteProject );
  yield takeEvery( 'ADD_PROJECT', addProject );
}

// ------ SAGAS ----------------------------------------------------------------

// GET Projects List
function* getProjectsList( action ) {
  console.log( 'Hit the getProjectsList saga', action );
  try {
    const getResponse = yield axios.get( '/projects' );
    console.log( 'GET projects response:', getResponse );
    // reset action to match projects reducer | send list of projects
    action = { type: 'SET_PROJECTS', payload: getResponse.data };
    // dispatch action to projects reducer to update list of projects
    yield put( action );
  }
  catch ( error ) {
    console.log( `Couldn't get projects`, error );
    alert( `Sorry, couldn't get the projects. Try again later` );
  }
}

// GET Tags
function* getTags( action ) {
  console.log( 'Hit the getTags saga', action );
  try {
    const getResponse = yield axios.get( '/projects/tags' );
    console.log( 'GET tags response:', getResponse );
    // reset action to match tags reducer | send list of tags
    action = { type: 'SET_TAGS', payload: getResponse.data };
    // dispatch action to tags reducer to update list of tags
    yield put( action );
  }
  catch ( error ) {
    console.log( `Couldn't get tags`, error );
    alert( `Sorry, couldn't get the tags. Try again later` );
  }
}

// POST
function* addProject( action ) {
  // action.payload should be a project object
  console.log( 'Hit the addProject saga', action );
  try {
    yield axios.post( '/projects', action.payload )
    // reassign addProject saga action to match getProjectsList action.type
    action = { type: 'GET_ALL_PROJECTS' };
    // dispatch action to getProjectsList saga
    yield put( action );
  }
  catch ( error ) {
    console.log( `Couldn't add projects`, error );
    alert( `Sorry, couldn't add the projects. Try again later` );
  }
}

// DELETE
function* deleteProject( action ) {
  // action.payload should be a number that represents a project id
  // that matches a project id in the database
  console.log( 'hit the deleteProject saga', action );
  console.log( 'action.payload:', action.payload );
  try {
    yield axios.delete( `/projects/${ action.payload }` )
    // reassign deleteProject saga action to match getProjectsList action.type
    action = { type: 'GET_ALL_PROJECTS' };
    // dispatch action to getProjectsList saga
    yield put( action );
  } catch ( error ) {
    console.log( `Couldn't delete plant`, error );
    alert( `Sorry, couldn't delete the plant. Try again later` );
  }
}

// ------ REDUCERS -------------------------------------------------------------

// all projects returned from the server
const projects = ( state = [], action ) => {
  if ( action.type === 'SET_PROJECTS' ) {
    return action.payload;
  }
  return state;
}

// all project tags (e.g. 'React', 'jQuery', 'Angular', 'Node.js')
const tags = ( state = [], action ) => {
  if ( action.type === 'SET_TAGS' ) {
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
sagaMiddleware.run( watcherSaga );

// Wrap entire App component in provider and append to 'root' in html
ReactDOM.render(
  <Provider store={ storeInstance }>
    <App />
  </Provider>, document.getElementById( 'root' )
);

registerServiceWorker();
