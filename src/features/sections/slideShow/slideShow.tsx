import classes from "./slideShow.module.css";
import sectionStyles from "../sections.module.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { ReactNode } from "react";
import travelHatPhoto from '../../../assets/travel_hat.jpeg';
import groupTravelPhoto from '../../../assets/group_travel.jpeg';
import jumpPhoto from '../../../assets/jump.jpeg';
import graduationPhoto from '../../../assets/graduation.jpeg';
import { ISectionProps } from "../ISectionProps";
import useIsMobile from "../../../hooks/useIsMobile";

const SlideShowId = "SlideShowId";

export default function SlideShow(props: ISectionProps) {
  const isActiveClass = props.isActive ? classes.active : "";
  const classNames = classes.About + " " + sectionStyles[props.theme]; 

  return (
    <section
      style={props.style}
      className={classNames}
      id={slideShowSectionId}
    >
      <h1 className={classes.sthAboutMe + " " + isActiveClass} id={SlideShowId}>Something about me</h1>
      {CreateSlidePictures(props.isActive)}
    </section>
  );
}

function CreateSlidePictures(isActive: boolean): ReactNode {
  const isMobile = useIsMobile();
  const displayCLass = isMobile ? classes.MobileSlide : classes.DesktopSlide;
  const isActiveClass = isActive ? classes.active : "";

  return (
    <Slide
      cssClass={classes.slideShow + " " + isActiveClass}
      autoplay={isActive}>
        <div className={displayCLass}>
          <div
            style={{
              width: isMobile ? "" : "30vw",
              backgroundImage:
                `url(${graduationPhoto})`,
            }}
          >
          </div>
          <h2 className={classes.slideTitle}>I am Bialystok's University of Technology graduate.</h2>
        </div>
        <div className={displayCLass}>
          <div
            style={{
              backgroundImage:
                `url(${travelHatPhoto})`,
            }}
          >
          </div>
          <h2 className={classes.slideTitle}>I love traveling!</h2>
        </div>
        <div className={displayCLass}>
          <div
            style={{
              backgroundImage: `url(${groupTravelPhoto})`,
            }}
          >
          </div>
          <h2 className={classes.slideTitle}>I usually travel with friends.</h2>
        </div>
        <div className={displayCLass}>
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

export const slideShowSectionId = "aboutSection";
