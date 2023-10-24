import NavItem from "./nav-item";
import AboutMeIcon from "../../../assets/about.svg";
import ProjectsIcon from "../../../assets/projects.svg";
import ContactIcon from "../../../assets/contact.svg";
import WeatherIcon from "../../../assets/weather.svg";
import { contactSectionId } from "../../sections/contact/contact";
import { aboutSectionId } from "../../sections/about/about";
import { experienceSectionId } from "../../sections/experience/experience";
import classes from "../nav-bar.module.css";
import { weatherSectionId } from "../../sections/weather/weather";
import useActiveSection from "../../../hooks/useActiveSection";

export default function DesktopNavItems() {
  const activeSection: string | null = useActiveSection();

  return (
    <div id={desktopNavBarItemsId} className={classes.DesktopNavBarItems}>
      <NavItem
        isActive={activeSection === aboutSectionId}
        title="About me"
        iconPath={AboutMeIcon}
        pageId={aboutSectionId}
      />
      <NavItem
        isActive={activeSection === experienceSectionId}
        title="Experience"
        iconPath={ProjectsIcon}
        pageId={experienceSectionId}
      />
      <NavItem
        isActive={activeSection === weatherSectionId}
        title="Weather"
        iconPath={WeatherIcon}
        pageId={weatherSectionId}
      />
      <NavItem
        isActive={activeSection === contactSectionId}
        title="Contact me"
        iconPath={ContactIcon}
        pageId={contactSectionId}
      />
    </div>
  );
}

export const desktopNavBarItemsId = "desktopNavBarItemsId";