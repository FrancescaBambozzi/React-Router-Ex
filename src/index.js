//Central Store State - where we render the App to the DOM
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; //used so that react can interact with the store of the app, this Provider component wraps the App comp
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer); //this root reducer will interact with the store

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
