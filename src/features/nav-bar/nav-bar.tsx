import useIsMobile from '../../hooks/useIsMobile';
import DesktopNavBar from './widgets/desktop-nav-bar';
import MobileNavBar from './widgets/mobile-nav-bar';
import classes from "./nav-bar.module.css";
import useIsAbsoluteAppBar from '../../hooks/useAbsoluteAppBar';

export default function NavBar() {
  const isMobile: boolean = useIsMobile();
  const isAbsoluteAppBar = useIsAbsoluteAppBar();

  let className = `${classes.NavBarBackground}`;

  if (isAbsoluteAppBar && isMobile) {
    className += ` ${classes.absoluteNavBar}`
  }

  function renderNavBar() {
    if (isMobile) {
      return <MobileNavBar/>
    } else {
      return <DesktopNavBar/>
    }
  }

 
      
  return <header 
    id={navBarId} 
    className={className}>
    {renderNavBar()}
  </header>;
}

export const navBarId = 'navBarId';