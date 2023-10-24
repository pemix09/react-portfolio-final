import React from "react";
import classes from "../nav-bar.module.css";

export default function SocialIcon(props: SocialIconProps) {
  return (
    <a href={props.link} title={props.title}>
      <img className={classes.social} src={props.iconPath} alt={props.title} />
    </a>
  );
}

type SocialIconProps = {
  link: string;
  title: string;
  iconPath: string;
};
