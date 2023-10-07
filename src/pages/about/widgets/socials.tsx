import React from "react";
import { ReactNode } from "react";
import SocialIcon from "./social-icon";
import GithubLogo from "../../../assets/iconmonstr-github-4.svg";
import FacebookLogo from "../../../assets/iconmonstr-facebook-4.svg";
import LinkedInLogo from "../../../assets/iconmonstr-linkedin-4.svg";

export class Socials extends React.Component {

  render(): ReactNode {
    return (
      <div className="socials">
        <SocialIcon 
          link="https://github.com/pemix09" 
          title="github profile"
          iconPath={GithubLogo}/>
        <SocialIcon
          link="https://www.facebook.com/przemek.kl.902/"
          title="Facebook profile"
          iconPath={FacebookLogo}/>
        <SocialIcon
          link="https://www.linkedin.com/in/przemys%C5%82aw-klejno-233b59178/"
          title="LinkedIn profile"
          iconPath={LinkedInLogo}/>
      </div>
    );
  }
}


