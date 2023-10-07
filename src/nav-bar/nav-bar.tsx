import DesktopNavBar from './widgets/desktop-nav-bar';
import MobileNavBar from './widgets/mobile-nav-bar';
import { useWindowSize } from '../hooks/use-windows-size';

export default function NavBar(props: any) {
  const [windowWidth, windowHeight] = useWindowSize();
      
  if (windowWidth < 700) {
    return <MobileNavBar/>
  } else {
    return <DesktopNavBar/>
  }
}
