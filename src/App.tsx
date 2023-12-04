import './App.css';
import Sections from './features/sections/sections';
import { NavBarHeader } from './features/nav-bar/nav-bar-header';
import { useEffect, useRef } from 'react';

function App() {
  const navBarRef: React.MutableRefObject<undefined> = useRef();
  
  return (
    <div className="App">
      <NavBarHeader ref={navBarRef}/>
      <Sections headerRef={navBarRef}/>
    </div>
  );
}

export default App;
