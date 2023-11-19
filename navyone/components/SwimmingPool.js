import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import SideNav from "./SideNav";
import styles from "../assets/styles/SpecialBooking.module.css";

const SwimmingPool = () => {
  const tableStyle = {
    width: '80%', 
    margin: '20px auto',
  };

  const cellStyle = {
    border: '1px solid #dddddd',
    textAlign: 'left',
    padding: '8px', 
    fontSize: '14px', 
  };

  const headerStyle = {
    ...cellStyle,
    fontWeight: 'bold',
    backgroundColor: '#f2f2f2',
  };

  return (
    <div>
      <Navbar />
      <SideNav />
      <div className={styles.bodyContent}>
        <div>
          <h1 className={styles.header}>Swimming Pool</h1>
        </div>
        <div className={styles.tableContainer}>
          <center>
            <h4>
              <b>
                <u>Utilisation of Station Swimming Pool</u>
              </b>
            </h4>
          </center>

          <center>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={headerStyle}>Day</th>
                  <th style={headerStyle}>Timings</th>
                  <th style={headerStyle}>Users</th>
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
                  <td>0930 - 1245</td>
                  <td>Non Swimmers</td>
                </tr>
                <tr>
                  <td>1245 - 1430</td>
                  <td>Closed (for Lunch)</td>
                </tr>
                <tr>
                  <td>1430 - 1515</td>
                  <td>Non Swimmers/AI/HY/Promotion PET</td>
                </tr>
                <tr>
                  <td>1515 - 1630</td>
                  <td>UT Officers & Cadets of 1TS/NCW Cadets/ PET</td>
                </tr>
                <tr>
                  <td>All days except Friday</td>
                  <td>1630 - 1730</td>
                  <td>Ladies</td>
                </tr>
                <tr>
                  <td>Odd Dates</td>
                  <td>1745 - 2100</td>
                  <td>Officers & Families</td>
                </tr>
                <tr>
                  <td>Even Dates</td>
                  <td>1745 - 2100</td>
                  <td>Sailors & Families</td>
                </tr>
                <tr>
                  <td rowSpan="7">Sunday & Holidays</td>
                  <td>0800-1000</td>
                  <td>Sailors & Families</td>
                </tr>
                <tr>
                  <td>1015-1215</td>
                  <td>Officers & Families</td>
                </tr>
                <tr>
                  <td>1215-1300</td>
                  <td>SCC Cadets/ Organised swimming as approved by HQSNC</td>
                </tr>
                <tr>
                  <td>1430-1515</td>
                  <td>Non Swimmers/AI/HY/Promotion PET</td>
                </tr>
                <tr>
                  <td>1515-1630</td>
                  <td>UT Officers & Cadets of 1TS/NCW Cadets/ PET</td>
                </tr>
                <tr>
                  <td>1745-1900</td>
                  <td>Sailors & Families</td>
                </tr>
                <tr>
                  <td>1915-2100</td>
                  <td>Officers & Families</td>
                </tr>
              </tbody>
            </table>
          </center>

          <center>
            <h4>
              <b>
                <u>Note: </u>
              </b>{' '}
              - Swimming Pool will remain closed for maintenance till 1600h on
              Tuesdays and full day on Fridays.
            </h4>
          </center>
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default SwimmingPool;
