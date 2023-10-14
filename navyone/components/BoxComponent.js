import React from "react";
import styles from "../assets/styles/BoxComponent.module.css";

const BoxComponent = ({ title, items }) => {
  return (
    <div className={styles.box}>
      <div className={styles["heading-bar"]}>
        <h2 className={styles["heading-text"]}>{title}</h2>
      </div>
      <div className={styles["content-box"]}>
        {" "}
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BoxComponent;
