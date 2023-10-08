import classes from "../nav-bar.module.css";

export default function NavItem(props: NavItemProps) {
  function handleClick() {
    let element = document.getElementById(props.pageId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <li className={classes.navItem}>
        <div className={classes.RowFlex} onClick={handleClick}>
          <img src={props.iconPath} alt={props.title} />
          <p className={classes.title}>{props.title}</p>
        </div>
    </li>
  );
}

type NavItemProps = {
  title: string,
  iconPath: string,
  pageId: string
};
