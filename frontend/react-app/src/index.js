import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//import * as serviceWorker from './serviceWorker';

import { combineReducers, compose, applyMiddleware } from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import authReducer from './store/authReducer';

const reducer = combineReducers({ auth: authReducer }); // Using Combine Reducers here although only one reducer is present.
// Official explaination here: https://react-redux.js.org/using-react-redux/connect-mapstate#mapstatetoprops-will-not-run-if-the-store-state-is-the-same
const composeEnhanced = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // The first one is to make the chrome dev extension work
const middleware = composeEnhanced(applyMiddleware(thunk));
const store = configureStore({reducer, 
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware)}); // We are using thunk, because it allows delaying the dispatch actions
// Thunk wraps the dispatch actions into custom functions which are available with the mapDispatchToProps

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

//checkout serviceWorker
//serviceWorker.unregister();
