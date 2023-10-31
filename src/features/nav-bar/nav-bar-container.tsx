import NavBar from "./components/nav-bar";

export default function NavBarContainer() {

  return (
    <header id={navBarContainerId}>
      <NavBar/>
    </header>
  );
}

export const navBarContainerId = 'navBarContainerId';