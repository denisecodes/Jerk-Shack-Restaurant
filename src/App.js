import React from 'react';

import { AboutUs, Gallery, Header, Intro, SpecialMenu } from './container';
import { Navbar, Footer } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Intro />
    <Gallery />
    <Footer />
  </div>
);

export default App;
