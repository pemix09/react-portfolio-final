import React, { ReactNode } from "react";
import { Socials } from "./widgets/socials";
import classes from "./about.module.css";

export default class About extends React.Component {
  constructor(props: {}) {
    super(props);
    this.state = { color: "red" };
  }

  render(): ReactNode {
    return (
      <section className={classes.About}>
        <div className="hero-area">
          <div className="hero-text">
            <h1>Przemysław Klejno</h1>
            <p>Full Stack Developer</p>
            <a href="#about-me">
              <div className="button">About me</div>
            </a>
          </div>
          <Socials />
        </div>
      </section>
    );
  }
}
