import SlideShow, { slideShowSectionId } from "./slideShow/slideShow";
import Contact, { contactSectionId } from "./contact/contact";
import Experience, { experienceSectionId } from "./experience/experience";
import { navBarContainerId } from "../nav-bar/nav-bar-header";
import { useWaitForElementMount } from "../../hooks/useWaitForElementMount";
import About, { introductionSectionId } from "./introduction/introduction";
import useActiveSection from "../../hooks/useActiveSection";

export default function Sections() {
  let sectionsStyle: React.CSSProperties = {};
  let navBar = useWaitForElementMount(navBarContainerId);
  const activeSection: string | null = useActiveSection();
  console.debug("Active section: " + activeSection);

  if (navBar) {
    console.debug("NavBar found, setting margin-top to navBar height + 100");
    sectionsStyle.marginTop = navBar.offsetHeight + 20;
  } else {
    console.debug("NavBar not found, setting default margin-top");
    sectionsStyle.marginTop = 100;
  }

  return (
    <div id={sectionsId} className="classes.SectionsDiv">
      <About isActive={activeSection === introductionSectionId} style={sectionsStyle} theme="light"/>
      <SlideShow isActive={activeSection === slideShowSectionId} style={sectionsStyle} theme="dark"/>
      <Experience isActive={activeSection === experienceSectionId} style={sectionsStyle} theme="light"/>
      <Contact isActive={activeSection === contactSectionId} style={sectionsStyle} theme="dark"/>
    </div>
  );
}

export const sectionsId = "sectionsId";
