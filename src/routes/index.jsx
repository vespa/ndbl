import React from 'react';
import { Route } from 'react-router-dom';
import Form from '../client/containers/Form';
import Test from '../client/containers/Teste';

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

export default routes.map(item => <Route {...item} key={item.path} />);
