import classes from "../nav-bar.module.css";

export default function LogoItem(props: LogoItemProps) {
  return (
    <li className={classes.navItem}>
      <a className={classes.hoover} href="#about-me">
        <div className={classes.RowFlex}>
          <img src={props.iconPath} alt=""/>
        </div>
      </a>
    </li>
  );
}

type LogoItemProps = {
  iconPath: string;
};
