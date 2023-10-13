import About from "./about/about";
import Contact from "./contact/contact";
import Experience from "./experience/experience";

export default function Sections() {
  return (
    <div id={sectionsId}>
      <About />
      <Experience />
      <Contact />
    </div>
  );
}

export const sectionsId = "sectionsId";
