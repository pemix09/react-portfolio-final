import { Socials } from "./widgets/socials";
import classes from "./about.module.css";
import useIsAbsoluteAppBar from "../../../hooks/useAbsoluteAppBar";
import { navBarId } from "../../nav-bar/nav-bar";

export default function About() {
  const isAbsoluteAppBar = useIsAbsoluteAppBar();
  let margin: number = 0

  if (isAbsoluteAppBar === true) {
    let navBar = document.getElementById(navBarId);

    if (navBar) {
      margin = 2.5 * navBar.offsetHeight;
    }
  }

  return (
    <section
      style={{
        marginTop: margin,
      }} 
      className={classes.About} id={aboutSectionId}>
      <div className="hero-area">
        <div className="hero-text">
          <h1>Przemysław Klejno</h1>
          <p>Full Stack Developer</p>
        </div>
        <Socials />
      </div>
    </section>
  );
}

export const aboutSectionId = "aboutSection";
