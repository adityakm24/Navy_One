import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import SideNav from "./SideNav";
import styles from "../assets/styles/SpecialBooking.module.css";


const SchoolBus = () => {
  return (
    <div>
      <Navbar />
      <SideNav />
      <div className={styles.bodyContent}>
        <div>
          <h1 className={styles.header}>School Bus Info</h1>
        </div>
        <div className={styles.tableContainer}>
          <table>
            <tbody>
              <tr>
                <td className={styles.tableCell}>Contact Number</td>
                <td className={styles.tableCell}>0484 289 2468/ 2469</td>
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
      </div>
    </div>
  );
};

export default SchoolBus;

