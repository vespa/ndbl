import React, { Component } from 'react';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.scss';
import configureStore from './store/configureStore';
import Form from './containers/Form';

const store = configureStore();

class App extends Component {
  constructor(args) {
    super(args);
    this.state = {};
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">
              <Form />
            </h1>
          </header>
          <p className="App-intro">
            To get started, edit
            <code>
              src/App.js
            </code>
            and save to reload.
          </p>
        </div>
      </Provider>
    );
  }
}

export default App;
