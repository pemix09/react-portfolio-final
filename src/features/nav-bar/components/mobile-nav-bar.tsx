import classes from "../nav-bar.module.css";
import CodingIcon from "../../../assets/codingIcon.svg";
import HamburgerIcon from "../../../assets/iconmonstr-menu-right-lined.svg";

export default function MobileNavBar() {
  return (
    <nav className={classes.MobileNavBar}>
      <div className={classes.RowFlex}>
        <img className={classes.logo} src={CodingIcon} alt="" />
        <p className={classes.logoTitle}>Przemysław Klejno</p>
      </div>
      <img className={classes.hamburger} src={HamburgerIcon} alt="" />
    </nav>
  );
}
