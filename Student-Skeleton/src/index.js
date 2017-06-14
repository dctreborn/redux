import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

//CODE GOES HERE
//import App and Reducers here!
import App from "./components/app.js";
import reducers from "./reducers";

//CODE GOES HERE

//CODE GOES HERE
//create your const createStoreWithMiddleware here
//CODE GOES HERE
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector("#appContainer"));
