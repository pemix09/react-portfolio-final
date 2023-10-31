import classes from "../nav-bar.module.css";
import CodingIcon from "../../../assets/codingIcon.svg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { aboutSectionId } from "../../sections/about/about";
import { experienceSectionId } from "../../sections/experience/experience";
import { contactSectionId } from "../../sections/contact/contact";
import useActiveSection from "../../../hooks/useActiveSection";

export default function NavBar() {
    const activeSection: string | null = useActiveSection();

    return (
        <Navbar fixed="top" bg="dark" data-bs-theme="dark" className={classes.MobileNavBar}>
          <Container>
            <Navbar.Brand href="#home">
              <div className={classes.RowFlex}>
                <img className={classes.logo} src={CodingIcon} alt="" />
                <p className={classes.logoTitle}>Przemysław Klejno</p>
              </div>
            </Navbar.Brand>
            <Nav className="justify-content-end">
              <Nav.Link active={activeSection === aboutSectionId} href={`#${aboutSectionId}`}>About me</Nav.Link>
              <Nav.Link active={activeSection === experienceSectionId} href={`#${experienceSectionId}`}>My experience</Nav.Link>
              <Nav.Link active={activeSection === contactSectionId} href={`#${contactSectionId}`}>Contact me</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      );
}