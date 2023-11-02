import ProfilePicturePath from "../../../assets/profil.png";
import { ISectionProps } from "../ISectionProps";
import styles from "./introduction.module.css";

export default function About(props: ISectionProps) {
  const isActiveClass = props.isActive ? styles.active : "";
  console.debug("About isActive class: " + isActiveClass);

  return (
    <section
      className={styles.introductionSection}
      style={props.style}
      id={introductionSectionId}
    >
      <div className={styles.introTitle + " " + isActiveClass}>
        <h1 style={{textDecoration: "underline"}}>
          <b>About me</b>
        </h1>
        <br />
        <br />
        <h3 className={styles.introText}>
          Hi! My name is Przemyslaw Klejno, I am software developer.
        </h3>
        <br />
        <br />
        <h3>My technology stack: </h3>
        <p className={styles.skill}>C#/.NET: ⭐⭐⭐⭐</p>
        <p className={styles.skill}>React: ⭐⭐⭐⭐</p>
        <p className={styles.skill}>JavaScript/TypeScript: ⭐⭐⭐⭐</p>
        <p className={styles.skill}>Node: ⭐⭐⭐⭐</p>
        <p className={styles.skill}>Flutter: ⭐⭐</p>
      </div>
      <img
        className={styles.profileImage + " " + isActiveClass}
        src={ProfilePicturePath}
        alt="Przemyslaw Klejno"
      />
    </section>
  );
}

export const introductionSectionId = "introductionSectionId";
