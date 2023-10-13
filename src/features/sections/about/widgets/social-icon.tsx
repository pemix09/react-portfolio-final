import React from "react";

export default function SocialIcon(props: SocialIconProps) {
    return (
        <a
          className="social"
          href={props.link}
          title={props.title}>
          <img src={props.iconPath} alt={props.title}/>
        </a>
      );
  }

type SocialIconProps = {
    link: string,
    title: string,
    iconPath: string
}