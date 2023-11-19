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
      margin: '15px 0 0 450px', // Margin around the box
      width: '180px' // Set a specific width
    }}>
      <p>START</p>
      <p>FINISH</p>
    </div>
    <div style={{
      margin: '15px 0 0 450px'
    }}>
      <p>* ADDITIONAL SHUTTLE BUS SERVICE AS PER AVAILABILITY OF BUSES</p>
    <p>Personnel Coming in between 2000-2300hrs may contact duty JCO at Travancore or Contact MT Pool on 9496450666 for transport requirements. The vehicle will be provided will be provided for personnel in groups as per availability.</p>
    </div>
   
        </div>
      </div>

  );
};

export default ShuttleBus;
