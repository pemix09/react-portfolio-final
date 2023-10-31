import classes from "./about.module.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { ReactNode } from "react";
import travelHatPhoto from '../../../assets/travel_hat.jpeg';
import groupTravelPhoto from '../../../assets/group_travel.jpeg';
import jumpPhoto from '../../../assets/jump.jpeg';
import graduationPhoto from '../../../assets/graduation.jpeg';

const aboutMeTitleId = "aboutMeTitleId";

export default function About() {
  return (
    <section
      className={classes.About}
      id={aboutSectionId}
    >
      <h1 id={aboutMeTitleId}>About me</h1>
      {createSlidePictures()}
    </section>
  );
}

function createSlidePictures(): ReactNode {

  return (
    <Slide
        autoplay={true}>
        <div className={classes.eachSlideEffect}>
          <div
            style={{
              width: "30vw",
              backgroundImage:
                `url(${graduationPhoto})`,
            }}
          >
          </div>
          <h2 className={classes.slideTitle}>I am Bialystok's University of Technology graduate.</h2>
        </div>
        <div className={classes.eachSlideEffect}>
          <div
            style={{
              backgroundImage:
                `url(${travelHatPhoto})`,
            }}
          >
          </div>
          <h2 className={classes.slideTitle}>I love traveling!</h2>
        </div>
        <div className={classes.eachSlideEffect}>
          <div
            style={{
              backgroundImage: `url(${groupTravelPhoto})`,
            }}
          >
          </div>
          <h2 className={classes.slideTitle}>I usually travel with friends.</h2>
        </div>
        <div className={classes.eachSlideEffect}>
          <div
            style={{
              backgroundImage: `url(${jumpPhoto})`,
            }}
          >
          </div>
          <h2 className={classes.slideTitle}>I love adrenaline!</h2>
        </div>
      </Slide>
  );
}

export const aboutSectionId = "aboutSection";
