import { NavBar } from "./components/nav-bar";
import { slideShowSectionId } from "../sections/slideShow/slideShow";
import { experienceSectionId } from "../sections/experience/experience";
import { contactSectionId } from "../sections/contact/contact";
import useActiveSection from "../../hooks/useActiveSection";
import Nav from "react-bootstrap/esm/Nav";
import { introductionSectionId } from "../sections/introduction/introduction";
import { forwardRef } from "react";

//this component is so called higher-prder component
export const NavBarHeader = forwardRef(function (props: any, ref: any) {
  const activeSection: string | null = useActiveSection();

  return (
    <NavBar ref={ref}>
      <Nav.Link
        active={activeSection === introductionSectionId}
        href={`#${introductionSectionId}`}
      >
        Introduction
      </Nav.Link>
      <Nav.Link
        active={activeSection === slideShowSectionId}
        href={`#${slideShowSectionId}`}
      >
        About me
      </Nav.Link>
      <Nav.Link
        active={activeSection === experienceSectionId}
        href={`#${experienceSectionId}`}
      >
        My experience
      </Nav.Link>
      <Nav.Link
        active={activeSection === contactSectionId}
        href={`#${contactSectionId}`}
      >
        Contact me
      </Nav.Link>
    </NavBar>
  );
});
