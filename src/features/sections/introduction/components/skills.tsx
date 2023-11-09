import styles from "../introduction.module.css";

export function Skills(props: { isActive: boolean }) {
  const skillsStyle: React.CSSProperties = {
    transition: "1s ease",
    transform: props.isActive ? "translateX(0)" : "translateX(-100vw)",
    marginTop: "20px",
  };

  return (
    <div style={skillsStyle}>
      <h3>My technology stack: </h3>

      <div className={styles.skillsList}>
        <p className={styles.skill}>C#/.NET: ⭐⭐⭐⭐</p>
        <p className={styles.skill}>React: ⭐⭐⭐⭐</p>
        <p className={styles.skill}>JavaScript/TypeScript: ⭐⭐⭐⭐</p>
        <p className={styles.skill}>Node: ⭐⭐⭐⭐</p>
        <p className={styles.skill}>Flutter: ⭐⭐</p>
      </div>
    </div>
  );
}
