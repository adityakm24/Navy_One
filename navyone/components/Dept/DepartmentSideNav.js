import React, { useState } from "react";
import styles from "../../assets/styles/SideNav.module.css"; // Import the CSS module
import Link from "next/link";

const CollapsibleSideNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div onClick={toggleNav}>
      <div className={`${styles.whitestrip}`}></div>
      <div
        className={`${styles.sidenav} ${isNavOpen ? styles.opened : ""}`}
        id="mySidenav"
        onClick={toggleNav}
      >
        <div className={styles.profile}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
            alt="Profile"
            className={styles.profileImage}
          />
          <div className={styles.profileText}>
            <p>+91 123 456 7890</p>
            <p>Officer</p>
          </div>
        </div>
        <button className={styles.closebtn} aria-label="Close">
          &times;
        </button>
        <Link href="/Dept/deptadduser">
          <div onClick={stopPropagation}>Add User</div>
        </Link>
        <Link href="/Dept/viewdeptcomplaints">
          <div onClick={stopPropagation}>View Complaints</div>
        </Link>
        <Link href="/pin-locations">
          <div onClick={stopPropagation}>Pin Locations</div>
        </Link>
        <Link href="/settings">
          <div onClick={stopPropagation}>Settings</div>
        </Link>
      </div>
    </div>
  );
};

export default CollapsibleSideNav;
