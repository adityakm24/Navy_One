import React, { useState } from "react";
import styles from "../assets/styles/Navbar.module.css";

const Navbar = () => {
  // State to manage the visibility of dropdowns
  const [isTransportDropdownOpen, setTransportDropdownOpen] = useState(false);
  const [isFacilitiesDropdownOpen, setFacilitiesDropdownOpen] = useState(false);
  const [isNWWADropdownOpen, setNWWADropdownOpen] = useState(false);
  const [isContactNumbersDropdownOpen, setContactNumbersDropdownOpen] =
    useState(false);

  // Function to toggle the visibility of dropdowns
  const toggleDropdown = (dropdownStateSetter) => {
    dropdownStateSetter((prevState) => !prevState);
  };

  // Function to close all dropdowns
  const closeAllDropdowns = () => {
    setTransportDropdownOpen(false);
    setFacilitiesDropdownOpen(false);
    setNWWADropdownOpen(false);
    setContactNumbersDropdownOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <a href="/">
          <img src="../logo/INSGaruda.jpg" alt="Left Logo" />
        </a>

        {/* Transport Dropdown */}
        <div
          className={styles.dropdown}
          onMouseEnter={() => toggleDropdown(setTransportDropdownOpen)}
          onMouseLeave={closeAllDropdowns}
        >
          <button className={styles.adminButton}>Transport</button>
          {isTransportDropdownOpen && (
            <div className={styles.dropdownContent}>
              <a href="/facilities/link1">Special Booking</a>
              <a href="/facilities/link2">School Bus Info</a>
              <a href="/facilities/link2">Shuttle Bus Info</a>
            </div>
          )}
        </div>

        {/* Facilities Dropdown */}
        <div
          className={styles.dropdown}
          onMouseEnter={() => toggleDropdown(setFacilitiesDropdownOpen)}
          onMouseLeave={closeAllDropdowns}
        >
          <button className={styles.adminButton}>Facilities</button>
          {isFacilitiesDropdownOpen && (
            <div className={styles.dropdownContent}>
              <a href="/facilities/link1">Library</a>
              <a href="/facilities/link2">Gymnasium</a>
              <a href="/facilities/link2">Shopping Complex</a>
              <a href="/facilities/link2">NOI</a>
              <a href="/facilities/link2">Swimming Pool</a>
              <a href="/facilities/link2">Sagarika (Movie Booking)</a>
              <a href="/facilities/link2">INCS</a>
              <a href="/facilities/link2">Bank/ ATM</a>
            </div>
          )}
        </div>

        {/* NWWA Dropdown */}
        <div
          className={styles.dropdown}
          onMouseEnter={() => toggleDropdown(setNWWADropdownOpen)}
          onMouseLeave={closeAllDropdowns}
        >
          <button className={styles.adminButton}>NWWA</button>
          {isNWWADropdownOpen && (
            <div className={styles.dropdownContent}>
              <a href="/nwwa/link1">Shops</a>
              <a href="/nwwa/link2">Activities</a>
              <a href="/nwwa/link2">Training</a>
              <a href="/nwwa/link2">Important Contact No.</a>
              <a href="/nwwa/link2">Members</a>
            </div>
          )}
        </div>

          <a href="/contact-numbers/link1" className={styles.navLink}>
            <button className={styles.adminButton}>Contact Numbers</button>
          </a>
      </div>
      <div className={styles.right}>
        <a href="/">
          <img src="./logo/INS.jpg" alt="Right Logo" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
