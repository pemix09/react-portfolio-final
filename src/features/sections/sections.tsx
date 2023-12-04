import SlideShow, { slideShowSectionId } from "./slideShow/slideShow";
import Contact, { contactSectionId } from "./contact/contact";
import Experience, { experienceSectionId } from "./experience/experience";
import { useWaitForElementMount } from "../../hooks/useWaitForElementMount";
import About, { introductionSectionId } from "./introduction/introduction";
import useActiveSection from "../../hooks/useActiveSection";
import { ForwardedRef, forwardRef, memo } from "react";

interface SectionsProps {
  headerRef: any
}

const Sections = (props: SectionsProps) => {
  const sectionsStyle: React.CSSProperties = {};
  const activeSection: string | null = useActiveSection();

  if (props.headerRef?.current) {
    sectionsStyle.marginTop = props.headerRef.current.offsetHeight + 20;
    console.debug("NavBar found, setting margin-top to: " + sectionsStyle.marginTop);
  } else {
    console.debug("NavBar not found, setting default margin-top");
    sectionsStyle.marginTop = 50;
  }

  return (
    <div id={sectionsId} className="classes.SectionsDiv">
      <About isActive={activeSection === introductionSectionId} style={sectionsStyle} theme="light"/>
      <SlideShow isActive={activeSection === slideShowSectionId} style={sectionsStyle} theme="dark"/>
      <Experience isActive={activeSection === experienceSectionId} style={sectionsStyle} theme="light"/>
      <Contact isActive={activeSection === contactSectionId} style={sectionsStyle} theme="dark"/>
    </div>
  );
};

export const sectionsId = "sectionsId";
export default memo(Sections);
