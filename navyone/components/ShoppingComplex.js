import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import SideNav from "./SideNav";
import styles from "../assets/styles/SpecialBooking.module.css";

const ShoppingComplex = () => {
  return (
    <div>
      <Navbar />
      <SideNav />
      <div className={styles.bodyContent}>
        <div>
          <h1 className={styles.header}>Shopping Complex</h1>
        </div>
        <div className={styles.tableContainer}>
          <center><table>
            <thead>
              <tr>
                <td >Day</td>
                <td >Timings</td>
                <td >Users</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan="7">Mon, Wed, Thu & Sat</td>
                <td>0600 - 0700</td>
                <td>Officers & Sailors and NCS children on all four days (Lane 7 and 8 only along with Swimming Coach)</td>
              </tr>
              <tr>
                <td>0700 - 0800</td>
                <td>Closed (for Breakfast)</td>
              </tr>
              <tr>
                <td>0800 - 0930</td>
                <td>AI/HY/Promotion PET/Organised</td>
              </tr>
              <tr>
                <td>0800 - 0930</td>
                <td>AI/HY/Promotion PET/Organised</td>
              </tr>
              <tr>
                <td>0800 - 0930</td>
                <td>AI/HY/Promotion PET/Organised</td>
              </tr>
              <tr>
                <td>0800 - 0930</td>
                <td>AI/HY/Promotion PET/Organised</td>
              </tr>
              <tr>
                <td>0800 - 0930</td>
                <td>AI/HY/Promotion PET/Organised</td>
              </tr>
              <tr>
                <td>All days except Friday</td>
                <td>aaa</td>
                <td>aaa</td>
              </tr>
              <tr>
                <td>Odd Dates</td>
                <td>aaaa</td>
                <td>aaa</td>
              </tr>
              <tr>
                <td>Even Dates</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
              <td rowSpan="7">Sunday & Holidays</td>
                <td>1430-1515</td>
                <td>Some content here</td>
              </tr>
              <tr>
                <td>1430-1515</td>
                <td>Some content here</td>
              </tr>
              <tr>
                <td>1430-1515</td>
                <td>Some content here</td>
              </tr>
              <tr>
                <td>1430-1515</td>
                <td>Some content here</td>
              </tr>
              <tr>
                <td>1430-1515</td>
                <td>Some content here</td>
              </tr>
              <tr>
                <td>1430-1515</td>
                <td>Some content here</td>
              </tr>
              <tr>
                <td>1430-1515</td>
                <td>Some content here</td>
              </tr>
            </tbody>
          </table></center>
        </div>
      </div>
    </div>
  );
};

export default ShoppingComplex;
