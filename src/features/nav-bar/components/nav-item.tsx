import classes from "../nav-bar.module.css";

export default function NavItem(props: NavItemProps) {
  let paragraphActiveClass = props.isActive ? classes.activeElement : '';
  let imageActiveClass = props.isActive ? classes.activeImage : '';

  function handleClick() {
    let element = document.getElementById(props.pageId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className={classes.navItem} onClick={handleClick}>
          <img 
            style={{
              width: 40,
            }}
            src={props.iconPath} 
            alt={props.title} 
            className={imageActiveClass}
            />
          <p className={`${classes.title} ${paragraphActiveClass}`}>{props.title}</p>
    </div>
  );
}

type NavItemProps = {
  title: string,
  iconPath: string,
  pageId: string,
  isActive: boolean
};
