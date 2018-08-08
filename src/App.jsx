import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.scss';
import configureStore from './store/configureStore';
import Form from './containers/Form';
import Test from './containers/Teste';

const store = configureStore();
const generateRoutes = (value) => {
  return value.map(item => <Route {...item} key={item.path} />);
};

const routes = [
  {
    path: '/',
    exact: true,
    component: Form,
  },
  {
    path: '/test',
    exact: true,
    component: Test,
  },
];

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
              {generateRoutes(routes)}
            </Switch>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
