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
          <center><b><h4><u>AMENDED TIME AND ROUTE FOR SHUTTLE SERVICE</u></h4></b></center>
          
        </div>
       
        </div>
      </div>

  );
};

export default ShuttleBus;
