import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers/index';
import {BrowserRouter as Router, Route} from 'react-router-dom';


const store = createStore(rootReducer, applyMiddleware(thunk, logger));
 

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" render={(props) => <App {...props} />} />
    </Router>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
