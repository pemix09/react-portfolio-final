import classes from "../nav-bar.module.css";
import { desktopNavBarId } from "./desktop-nav-bar";

export type ImageItemProps = {
  src: string;
  alt: string;
};

export default function ImageItem(props: ImageItemProps) {
  return (
    <div className={classes.headshotContainer}>
      <img className={classes.headshot} src={props.src} alt={props.alt} />
      <p className={classes.headshotTitle}>
        <b>Przemysław Klejno</b>
      </p>
    </div>
  );
}
