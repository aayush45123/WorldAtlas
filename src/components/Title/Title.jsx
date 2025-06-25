import React from "react";
import styles from "./Title.module.css";

const Title = ({ title, subtitle }) => {
  return (
    <div className={styles.titleContainer}>
      <p className={styles.titleSubtitle}>{title}</p>
      <h2 className={styles.titleHeading}>{subtitle}</h2>
    </div>
  );
};

export default Title;
