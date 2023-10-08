import React from 'react';
import './App.css';
import About from './features/about/about';
import NavBar from './features/nav-bar/nav-bar';
import Contact from './features/contact/contact';
import Experience from './features/experience/experience';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <About/>
      <Experience/>
      <Contact/>
    </div>
  );
}

export default App;
