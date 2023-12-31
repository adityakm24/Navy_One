import React, { useState } from "react";
import Link from "next/link";
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
        <Link href="/">
          <img src="../logo/INSGaruda.png" alt="Left Logo" />
        </Link>

        {/* Transport Dropdown */}
        <div
          className={styles.dropdown}
          onMouseEnter={() => toggleDropdown(setTransportDropdownOpen)}
          onMouseLeave={closeAllDropdowns}
        >
          <button className={styles.adminButton}>Transport</button>
          {isTransportDropdownOpen && (
            <div className={styles.dropdownContent}>
              <Link href="/Transport/SpecialBooking">Special Booking</Link>
              <Link href="/Transport/SchoolBus">School Bus Info</Link>
              <Link href="/Transport/ShuttleBus">Shuttle Bus Info</Link>
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
              <Link href="/Library">Library</Link>
              <Link href="/Gymnasium">Gymnasium</Link>
              <Link href="/ShoppingComplex">Shopping Complex</Link>
              <Link href="/facilities/link2">NOI</Link>
              <Link href="/SwimmingPool">Swimming Pool</Link>
              <Link href="/facilities/link2">Sagarika (Movie Booking)</Link>
              <Link href="/facilities/link2">INCS</Link>
              <Link href="/facilities/link2">Bank/ ATM</Link>
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
              <Link href="/nwwa/link1">Shops</Link>
              <Link href="/nwwa/link2">Activities</Link>
              <Link href="/nwwa/link2">Training</Link>
              <Link href="/nwwa/link2">Important Contact No.</Link>
              <Link href="/nwwa/link2">Members</Link>
            </div>
          )}
        </div>  

        <Link href="/contact/" passHref>
          <div className={styles.adminButton}>Contact Numbers</div>
        </Link>

      </div>
      <div className={styles.right}>
      <Link href="/user/userlogin" passHref>
          <div className={styles.loginButton}>Login</div>
        </Link>
        <Link href="/">
          <img src="../logo/INS.png" alt="Right Logo" />
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;
