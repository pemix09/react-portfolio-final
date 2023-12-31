import classes from "../nav-bar.module.css";
import CodingIcon from "../../../assets/codingIcon.svg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { forwardRef } from "react";

export const NavBar = forwardRef(function (props: any, ref: any) {
  function goToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <Navbar
      collapseOnSelect 
      expand="lg"
      ref={ref}
      fixed="top"
      bg="dark"
      data-bs-theme="dark"
      className="bg-body-tertiary"
    >
      <Container>
        <Navbar.Brand href="#home" onClick={() => goToTop()}>
          <div className={classes.RowFlex}>
            <img className={classes.logo} src={CodingIcon} alt="" />
            <p className={classes.logoTitle}>Przemysław Klejno</p>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>{props.children}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
});