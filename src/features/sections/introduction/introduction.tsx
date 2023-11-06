import { Row, Col, Container } from "react-bootstrap";
import useScreenOrientation, { ScreenOrientationType } from "../../../hooks/useScreenOrientation";
import { ISectionProps } from "../ISectionProps";
import { IntroText } from "./components/introText";
import { ProfilePicture } from "./components/profilePicture";
import { Skills } from "./components/skills";
import styles from "./introduction.module.css";

export default function About(props: ISectionProps) {
  const orientation: ScreenOrientationType = useScreenOrientation();
  console.debug("orientation: " + orientation);

  return (
    <section
      className={styles.introductionSection}
      style={props.style}
      id={introductionSectionId}
    >
      <Container>
        {getViewBasedOnOrientation(orientation, props.isActive)}
      </Container>
    </section>
  );
}

function getViewBasedOnOrientation(
  orientation: ScreenOrientationType,
  isActive: boolean
) {
  if ( orientation === 'portait' ) {
    return (
      <Col>
        <IntroText isActive={isActive} />
        <ProfilePicture isActive={isActive} />
        <Skills isActive={isActive} />
      </Col>
    );
  } else {
    return (
      <Row>
        <Col>
          <IntroText isActive={isActive} />
          <Skills isActive={isActive} />
        </Col>
        <Col>
          <ProfilePicture isActive={isActive} />
        </Col>
      </Row>
    );
  }
}

export const introductionSectionId = "introductionSectionId";
