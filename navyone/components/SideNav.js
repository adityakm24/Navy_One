import React, { useState } from "react";
import styles from "../assets/styles/SideNav.module.css"; // Import the CSS module

const CollapsibleSideNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div>
      <div className={`${styles.whitestrip}`}>
        <button
          className={styles.toggleBtn}
          onClick={toggleNav}
          aria-expanded={isNavOpen}
        >
          &#9776;
        </button>
      </div>
      <div
        className={`${styles.sidenav} ${isNavOpen ? styles.opened : ""}`}
        id="mySidenav"
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
        <button
          className={styles.closebtn}
          onClick={toggleNav}
          aria-label="Close"
        >
          &times;
        </button>
        <a href="#">My Complaints</a>
        <a href="#">NORA</a>
        <a href="#">SNCO(O) MESS</a>
        <a href="#">Transit</a>
        <a href="#">NOI</a>
      </div>
    </div>
  );
};

export default CollapsibleSideNav;
