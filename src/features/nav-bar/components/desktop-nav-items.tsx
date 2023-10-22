import NavItem from "./nav-item";
import AboutMeIcon from "../../../assets/about.svg";
import ProjectsIcon from "../../../assets/projects.svg";
import ContactIcon from "../../../assets/contact.svg";
import { contactSectionId } from "../../sections/contact/contact";
import { aboutSectionId } from "../../sections/about/about";
import { experienceSectionId } from "../../sections/experience/experience";
import classes from "../nav-bar.module.css";

export default function DesktopNavItems() {
  return (
    <div className={classes.DesktopNavBarItems}>
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
    </div>
  );
}
