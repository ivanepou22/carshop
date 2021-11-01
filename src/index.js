import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ContextApi} from './Context/ContextApi'

ReactDOM.render(
  <React.StrictMode>
    <ContextApi>
      <App />
    </ContextApi>
  </React.StrictMode>,
  document.getElementById('root')
);

