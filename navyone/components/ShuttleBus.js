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
          <table>
            <tbody>
            <tr style={{ backgroundColor: "rgb(0, 0, 128)" }}>
                <td className={styles.tableCell} style={{ color: "white" }}>
                  School
                </td>
                <td className={styles.tableCell} style={{ color: "white" }}>
                  Location
                </td>
                <td className={styles.tableCell} style={{ color: "white" }}>
                  Timing
                </td>
              </tr>
              <tr>
                <td className={styles.tableCell}>NCS</td>
                <td className={styles.tableCell}></td>
                <td className={styles.tableCell}></td>
              </tr>
              <tr>
              <td className={styles.tableCell}>KV1</td>
                <td className={styles.tableCell}></td>
                <td className={styles.tableCell}></td>
              </tr>
              <tr>
              <td className={styles.tableCell}>KV2</td>
                <td className={styles.tableCell}></td>
                <td className={styles.tableCell}></td>
              </tr>
              <tr>
              <td className={styles.tableCell}>KV Dronacharya</td>
                <td className={styles.tableCell}></td>
                <td className={styles.tableCell}></td>
                              </tr>
                              <tr>
              <td className={styles.tableCell}>KV Port Trust</td>
                <td className={styles.tableCell}></td>
                <td className={styles.tableCell}></td>
                              </tr>
                              <tr>
              <td className={styles.tableCell}>KV Kadvanthra</td>
                <td className={styles.tableCell}></td>
                <td className={styles.tableCell}></td>
                              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShuttleBus;
