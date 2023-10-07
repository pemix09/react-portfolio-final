import React from 'react';
import './App.css';
import About from './pages/about/about';
import NavBar from './nav-bar/nav-bar';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
      </header>
      <body>
        <About/>
      </body>
    </div>
  );
}

export default App;
