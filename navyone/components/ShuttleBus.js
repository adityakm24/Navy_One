import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import SideNav from "./SideNav";
import styles from "../assets/styles/SpecialBooking.module.css";

const ShuttleBus = () => {
  return (
    <div>
      <Navbar />
      <SideNav />
      <div className={styles.bodyContent}>
        <div>
          <h1 className={styles.header}>Shuttle Bus Info</h1>
        </div>

        <div className={styles.tableContainer}>
          <center><h4><b><u>AMENDED TIME AND ROUTE FOR SHUTTLE SERVICE</u></b></h4></center>
        </div>
        <div style={{
      border: '1px solid #000', // Border color
      padding: '4px', // Padding inside the box
      margin: '15px 0 0 400px', // Margin around the box
      width: '180px' // Set a specific width
    }}>
      <p>START</p>
      <p>FINISH</p>
    </div>
    
        </div>
      </div>

  );
};

export default ShuttleBus;
