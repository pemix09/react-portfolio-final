import classes from "../nav-bar.module.css";
import NavItem from "./nav-item";
import AboutMeIcon from "../../../assets/about.svg";
import ProjectsIcon from "../../../assets/projects.svg";
import ContactIcon from "../../../assets/contact.svg";
import CodingIcon from "../../../assets/codingIcon.svg"
import { contactSectionId } from "../../contact/contact";
import { experienceSectionId } from "../../experience/experience";
import { aboutSectionId } from "../../about/about";

export default function DesktopNavBar(): JSX.Element {
  return (
    <nav className={classes.NavBar}>
      <div className={classes.RowFlex}>
        <img className={classes.logo} src={CodingIcon} alt="" />
        <p>Przemysław Klejno</p>
      </div>
      <ul className={classes.navList}>
        <NavItem 
            title="About me"
            iconPath={AboutMeIcon}
            pageId={aboutSectionId}/>
        <NavItem
            title="Experience"
            iconPath={ProjectsIcon}
            pageId={experienceSectionId}/>
        <NavItem
            title="Contact me"
            iconPath={ContactIcon}
            pageId={contactSectionId}/>
      </ul>
    </nav>
  );
}
