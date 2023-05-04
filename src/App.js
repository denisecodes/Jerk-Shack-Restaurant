import React from 'react';

import { AboutUs, Header } from './container';
import { Navbar, Footer } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Footer />
  </div>
);

export default App;
