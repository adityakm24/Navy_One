import React from "react";
import Link from "next/link";
import styles from "../assets/styles/AdminNavbar.module.css";

const AdminNavbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        {/* Left Logo */}
        <Link href="/">
          <img src="../logo/INSGaruda.png" alt="Left Logo" className={styles.logo} />
        </Link>
      </div>

      <div className={styles.right}>
        {/* Dept Login Button */}
        <Link href="/deptlogin">
          <button className={`${styles.adminButton} ${styles.deptLoginButton}`}>Dept Login</button>
        </Link> 

        {/* Admin Login Button */}
        <Link href="/adminlogin">
          <button className={`${styles.adminButton} ${styles.loginButton}`}>Admin Login</button>
        </Link> 

        {/* Right Logo */}
        <Link href="/">
          <img src="./logo/INS.png" alt="Right Logo" className={styles.logo} />
        </Link>
      </div>
    </nav>
  );
};

export default AdminNavbar;
