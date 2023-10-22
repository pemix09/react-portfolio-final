import useIsMobile from "../../hooks/useIsMobile";
import About from "./about/about";
import Contact from "./contact/contact";
import Experience from "./experience/experience";
import Weather from "./weather/weather";
import classes from "./sections.module.css";
import { desktopNavBarId } from "../nav-bar/components/desktop-nav-bar";
import { useWindowSize } from "../../hooks/useWindowSize";

export default function Sections() {
  //hook used to rerender on screen change, nothing else!
  const windowSize = useWindowSize();
  const isMobile = useIsMobile();
  let leftMargin: number = 0;

  if (isMobile === false) {
    let navBar = document.getElementById(desktopNavBarId);

    if (navBar) {
        leftMargin = navBar.offsetWidth;
    }
  } else {
    leftMargin = 0;
  }

  return (
    <div 
        style={{
            marginLeft: leftMargin
        }}
        id={sectionsId} 
        className="classes.SectionsDiv">
      <About />
      <Experience />
      <Weather />
      <Contact />
    </div>
  );
}

export const sectionsId = "sectionsId";
