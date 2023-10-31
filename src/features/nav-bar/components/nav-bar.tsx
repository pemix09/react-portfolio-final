import classes from "../nav-bar.module.css";
import CodingIcon from "../../../assets/codingIcon.svg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavBar(props: React.PropsWithChildren) {

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
              {props.children}
            </Nav>
          </Container>
        </Navbar>
      );
}