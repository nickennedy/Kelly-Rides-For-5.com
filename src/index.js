import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter as Router} from 'react-router-dom'
import { Auth0Provider }  from '@auth0/auth0-react'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Auth0Provider
        domain={'dev-l442nibb.us.auth0.com'}
        clientId={'qZY8xCaR45bIJxIkg6rX79C6rELxWRYV'}
        redirectUri={window.location.origin}>
        <App />
      </Auth0Provider>  
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
