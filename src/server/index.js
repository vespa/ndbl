import path from 'path';
import Express from 'express';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import counterApp from '../combineReducers';
import App from '../App';

const app = Express();
const port = 3000;

// Serve static files
app.use('/static', Express.static('static'))
// We are going to fill these out in the sections to follow
function handleRender(req, res) { /* ... */ }

// This is fired every time the server side receives a request
app.use(handleRender);


function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="/static/main.js"></script>
      </body>
    </html>
    `;
}

app.listen(port);
