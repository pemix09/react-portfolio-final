import React, { ReactNode } from "react";
import { Socials } from "./widgets/socials";

export default class About extends React.Component {
  constructor(props: {}) {
    super(props);
    this.state = { color: "red" };
  }

  render(): ReactNode {
    return (
      <div className="hero-area">
        <div className="hero-text">
          <h1>Przemysław Klejno</h1>
          <p>Full Stack Developer</p>
          <a href="#about-me">
            <div className="button">About me</div>
          </a>
        </div>
        <Socials/>
      </div>
    );
  }
}
