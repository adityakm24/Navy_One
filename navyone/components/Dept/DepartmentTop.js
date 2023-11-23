import React from "react";
import Link from "next/link";
import styles from "../../assets/styles/Dept/DepartmentNav.module.css";

const DepartmentNav = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <Link href="/">
          <img src="../logo/INSGaruda.png" alt="Left Logo" />
        </Link>
        <p className={styles.textforwelcome}>
          Welcome, Department Head
        </p>
      </div>
    </nav>
  );
};

export default DepartmentNav;
