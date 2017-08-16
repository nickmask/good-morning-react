import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import persistState from 'redux-localstorage'

import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers'
import rootSaga from './sagas'

require('es6-promise').polyfill();
require('isomorphic-fetch');

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware, logger]

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}

const store = createStore(
  reducer,
  persistedState,
  applyMiddleware(...middleware)
)

sagaMiddleware.run(rootSaga)

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root'));
}

render()
store.subscribe(()=>{
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})
store.subscribe(render)

registerServiceWorker();
