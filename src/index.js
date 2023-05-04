import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

import './index.css';
import App from './App';
import Contact from './pages/Contact/Contact';
import Queuing from './pages/Queuing/Queuing';

// Clear currentTicket number every time the web app compiles again
localStorage.removeItem('currentTicket');

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path="/" component={App} />
      <Route path="/contact" component={Contact} />
      <Route path="/queuing" component={Queuing} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
