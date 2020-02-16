import { Provider } from 'react-redux';
import React from 'react';
import './global/global.css';
import { Router } from 'react-router-dom';
import store from './store/index';
import history from './service/history';
import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <div className="App" />
      </Router>
    </Provider>
  );
}

export default App;
