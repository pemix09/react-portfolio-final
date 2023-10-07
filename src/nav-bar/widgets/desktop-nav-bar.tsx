import classes from "../nav-bar.module.css";

export default function DesktopNavBar() {
  return (
    <nav>
      <svg
        className={classes.logo}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M24 10.935v2.131l-8 3.947v-2.23l5.64-2.783-5.64-2.79v-2.223l8 3.948zm-16 3.848l-5.64-2.783 5.64-2.79v-2.223l-8 3.948v2.131l8 3.947v-2.23zm7.047-10.783h-2.078l-4.011 16h2.073l4.016-16z" />
      </svg>
      <ul className={classes.navList}>
        <li>
          <a className={classes.hoover} href="#about-me" title="O mnie">
            <div className={classes.RowFlex}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                viewBox="0 0 24 24"
              >
                <path d="M14 18.435v.565h-14v-.583c-.006-1.557.062-2.446 1.854-2.86 1.964-.453 3.901-.859 2.97-2.577-2.762-5.093-.788-7.98 2.176-7.98 2.908 0 4.93 2.78 2.178 7.979-.905 1.708.963 2.114 2.97 2.577 1.797.416 1.859 1.311 1.852 2.879zm10-13.435h-8v2h8v-2zm0 4h-8v2h8v-2zm0 4h-8v2h8v-2zm0 4h-8v2h8v-2z" />
              </svg>
              <p className={classes.title}>O mnie</p>
            </div>
          </a>{" "}
        </li>
        <li>
          <a className={classes.hoover} href="#projects" title="Moje projekty">
            <div className="RowFlex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                viewBox="0 0 24 24"
              >
                <path d="M22 2v20h-20v-20h20zm2-2h-24v24h24v-24zm-4 7h-8v1h8v-1zm0 5h-8v1h8v-1zm0 5h-8v1h8v-1zm-10.516-11.304l-.71-.696-2.553 2.607-1.539-1.452-.698.71 2.25 2.135 3.25-3.304zm0 5l-.71-.696-2.552 2.607-1.539-1.452-.698.709 2.249 2.136 3.25-3.304zm0 5l-.71-.696-2.552 2.607-1.539-1.452-.698.709 2.249 2.136 3.25-3.304z" />
              </svg>
              <p className="title">Projekty</p>
            </div>
          </a>
        </li>
        <li>
          <a className={classes.hoover} href="#contact" title="Kontakt do mnie">
            <div className="RowFlex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                viewBox="0 0 24 24"
              >
                <path d="M22 5v14h-20v-14h20zm2-2h-24v18h24v-18zm-2 16l-6.526-6.618-3.445 3.483-3.418-3.525-6.611 6.66 5.051-8-5.051-6 10.029 7.446 9.971-7.446-4.998 6.01 4.998 7.99z" />
              </svg>
              <p className="title">Skontaktuj się ze mną</p>
            </div>
          </a>
        </li>
      </ul>
    </nav>
  );
}
