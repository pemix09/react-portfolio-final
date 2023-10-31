import About from "./about/about";
import Contact from "./contact/contact";
import Experience from "./experience/experience";
import { navBarContainerId } from "../nav-bar/nav-bar-header";

export default function Sections() {
  let sectionsStyle: React.CSSProperties = {};

  let navBar = document.getElementById(navBarContainerId);

  if (navBar) {
    sectionsStyle.marginTop = navBar.offsetHeight;
  } else {
    console.debug("NavBar not found, setting default margin-top");
    sectionsStyle.marginTop = 100;
  }

  return (
    <div style={sectionsStyle} id={sectionsId} className="classes.SectionsDiv">
      <About />
      <Experience />
      <Contact />
    </div>
  );
}

export const sectionsId = "sectionsId";
