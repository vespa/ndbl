import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';
// import logo from './logo.svg';
import './App.scss';
import configureStore from './store/configureStore';
import routes from './routes';

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
          <BrowserRouter>
            <Switch>
              {routes}
            </Switch>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
