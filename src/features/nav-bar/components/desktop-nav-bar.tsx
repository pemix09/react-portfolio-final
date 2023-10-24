import classes from "../nav-bar.module.css";
import ImageItem from "./image-item";
import ProfilePiture from "../../../assets/profil.png";
import DesktopNavItems from "./desktop-nav-items";
import { Socials } from "./socials";

export default function DesktopNavBar(): JSX.Element {
  
  return (
    <nav
      id={desktopNavBarId}
      className={`${classes.NavBar} ${classes.NavBarBackground}`}
    >
      <ImageItem 
        src={ProfilePiture} 
        alt={"My profile picture"} />
      <DesktopNavItems/>
      <Socials />
    </nav>
  );
}

export const desktopNavBarId = "desktopNavBarId";
