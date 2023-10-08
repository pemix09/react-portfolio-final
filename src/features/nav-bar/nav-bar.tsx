import useIsMobile from '../../hooks/use-is-mobile';
import DesktopNavBar from './widgets/desktop-nav-bar';
import MobileNavBar from './widgets/mobile-nav-bar';
import classes from "./nav-bar.module.css";

export default function NavBar() {
  const isMobile: boolean = useIsMobile();
  console.debug('Rendering nav bar');

  function renderNavBar() {
    if (isMobile) {
      return <MobileNavBar/>
    } else {
      return <DesktopNavBar/>
    }
  }
      
  return <header className={classes.NavBarBackground}>
    {renderNavBar()}
  </header>;
}
