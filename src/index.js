import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <Router>
    <App />
   
    </Router>
  </React.StrictMode>
);
