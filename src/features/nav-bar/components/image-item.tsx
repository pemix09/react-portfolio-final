import classes from "../nav-bar.module.css";

export type ImageItemProps = {
    src: string;
    alt: string;
};

export default function ImageItem(props: ImageItemProps) {
  return (
    <div className={classes.headshotContainer}>
      <img
        className={classes.headshot}
        src={props.src}
        alt={props.alt}
      />
      <h2 className={classes.headshotTitle}>Przemysław Klejno</h2>
    </div>
  );
}
