import React from 'react';

import { AboutUs, Chef, FindUs, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar, Footer } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
