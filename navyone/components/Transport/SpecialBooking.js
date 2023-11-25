import { useEffect, useState } from "react";
import Navbar from "../Navbar";
import SideNav from "../SideNav";
import styles from "../../assets/styles/SpecialBooking.module.css";


const SchoolBus = () => {
  return (
    <div>
      <Navbar />
      <SideNav />
      <div className={styles.bodyContent}>
        <div>
        <h1 className={styles.header} style={{ textAlign: 'left' }}>Special Booking</h1>
        </div>
        <center>
        <div className={styles.tableContainer}>
          <table>
            <tbody>
              <tr style={{ backgroundColor: "rgb(0, 0, 128)" }}>
                <td className={styles.tableCell} style={{ color: "white" }}>Contact Number</td>
                <td className={styles.tableCell} style={{ color: "white" }}>0484 289 2468/ 2469</td>
              </tr>
              <tr>
                <td className={styles.tableCell}>Email</td>
                <td className={styles.tableCell}>hirevehiclekochi@gmail.com</td>
              </tr>
              <tr>
                <td className={styles.tableCell}>Charges</td>
                <td className={styles.tableCell}></td>
              </tr>
              <tr>
                <td className={styles.tableCell}>Airport to Naval Base</td>
                <td className={styles.tableCell}>Rs 1200</td>
              </tr>
              <tr>
                <td className={styles.tableCell}>
                  Railway Station (Ernakulam)
                </td>
                <td className={styles.tableCell}>Rs 550</td>
              </tr>
            </tbody>
          </table>
        </div>
        </center>
      </div>
    </div>
  );
};

export default SchoolBus;

