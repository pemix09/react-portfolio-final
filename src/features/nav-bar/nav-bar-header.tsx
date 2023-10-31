import NavBar from "./components/nav-bar";
import { aboutSectionId } from "../sections/about/about";
import { experienceSectionId } from "../sections/experience/experience";
import { contactSectionId } from "../sections/contact/contact";
import useActiveSection from "../../hooks/useActiveSection";
import Nav from "react-bootstrap/esm/Nav";

//this component is so called higher-rder component
export default function NavBarHeader() {
  const activeSection: string | null = useActiveSection();

  return (
    <header id={navBarContainerId}>
      <NavBar>
        <Nav.Link
          active={activeSection === aboutSectionId}
          href={`#${aboutSectionId}`}>
          About me
        </Nav.Link>
        <Nav.Link
          active={activeSection === experienceSectionId}
          href={`#${experienceSectionId}`}>
          My experience
        </Nav.Link>
        <Nav.Link
          active={activeSection === contactSectionId}
          href={`#${contactSectionId}`}>
          Contact me
        </Nav.Link>
      </NavBar>
    </header>
  );
}

export const navBarContainerId = "navBarContainerId";
