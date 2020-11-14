import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css'
// You can choose your kind of history here (e.g. browserHistory)
// Your routes.js file
import App from './routes';

ReactDOM.render(
  <App style={{ backgroundColor: 'rgba(9,9,9,.07)' }} />,
  document.getElementById('root'),
);
