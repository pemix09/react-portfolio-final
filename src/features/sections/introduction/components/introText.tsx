import styles from "../introduction.module.css";

export function IntroText(props: { isActive: boolean }) {
    const introTextStyle: React.CSSProperties = {
        transition: "1s ease",
        transform: props.isActive ? "translateX(0)" : "translateX(-100vw)",
    };

  return (
    <div style={introTextStyle}>
      <h1 style={{ textDecoration: "underline" }}>
        <b>About me</b>
      </h1>
      <br />
      <h3 className={styles.introText}>
        Hi! My name is Przemyslaw Klejno, I am software developer.
      </h3>
    </div>
  );
}
