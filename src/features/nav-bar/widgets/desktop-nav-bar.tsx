import classes from "../nav-bar.module.css";
import NavItem from "./nav-item";
import AboutMeIcon from "../../../assets/about.svg";
import ProjectsIcon from "../../../assets/projects.svg";
import ContactIcon from "../../../assets/contact.svg";
import CodingIcon from "../../../assets/codingIcon.svg";
import { contactSectionId } from "../../sections/contact/contact";
import { aboutSectionId } from "../../sections/about/about";
import { experienceSectionId } from "../../sections/experience/experience";
import { sectionsId } from "../../sections/sections";

export default function DesktopNavBar(): JSX.Element {
  return (
    <nav className={`${classes.NavBar} ${classes.NavBarBackground}`}>
      <NavItem
        title="Przemysław Klejno"
        iconPath={CodingIcon}
        pageId={sectionsId}/>
      <NavItem
        title="About me"
        iconPath={AboutMeIcon}
        pageId={aboutSectionId}
      />
      <NavItem
        title="Experience"
        iconPath={ProjectsIcon}
        pageId={experienceSectionId}
      />
      <NavItem
        title="Contact me"
        iconPath={ContactIcon}
        pageId={contactSectionId}
      />
    </nav>
  );
}
