import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import SideNav from "./SideNav";
import styles from "../assets/styles/SpecialBooking.module.css";

const ShuttleBus = () => {
  const nodes = ["Travancore gate", "War Memorial", "Node 3", "Node 4", "Node 5", "Node 6", "Node 7", "Node 8", "Node 9", "Node 10"];
  const arrows = [{from: 0, to: 1}, {from: 1, to: 2}, {from: 2, to: 3}, {from: 3, to: 4}, {from: 4, to: 5}, {from: 5, to: 6}, {from: 6, to: 7}, {from: 7, to: 8}, {from: 8, to: 9}, {from: 9, to: 0}];
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
    <div style={{ paddingLeft: "150px", margin: '15px 300px 0 300px',width:'800px' }}  >
    <center><h4><b><u>TIMING OF SHUTTLE SERVICE</u></b></h4></center>
    <table border="1">
<tr>
<th>Time</th>
<th>Number of Trips</th>
</tr>
<tr>
<td><center>0700</center></td>
<td>01 Trip</td>
</tr>
<tr>
<td>0730</td>
<td>1</td>
</tr>
<tr>
<td>0800</td>
<td>1</td>
</tr>
<tr>
<td>0815</td>
<td>1</td>
</tr>
<tr>
<td>0830</td>
<td>1</td>
</tr>
<tr>
<td>0845</td>
<td>1</td>
</tr>
<tr>
<td>0900</td>
<td>1</td>
</tr>
<tr>
<td>0930</td>
<td>1</td>
</tr>
<tr>
<td>1000h*</td>
<td>1</td>
</tr>
<tr>
<td>1030h</td>
<td>1</td>
</tr>
<tr>
<td>1100h</td>
<td>1</td>
</tr>
<tr>
<td>1130h**</td>
<td>1</td>
</tr>
<tr>
<td>1200h**</td>
<td>1</td>
</tr>
<tr>
<td>1230h**</td>
<td>1</td>
</tr>
<tr>
<td>1300h**</td>
<td>1</td>
</tr>
<tr>
<td>1445h</td>
<td>1</td>
</tr>
<tr>
<td>1530h**</td>
<td>1</td>
</tr>
<tr>
<td>1600h**</td>
<td>1</td>
</tr>
<tr>
<td>1620h**</td>
<td>1</td>
</tr>
<tr>
<td>1700 h</td>
<td>0</td>
</tr>
<tr>
<td>1730h</td>
<td>1</td>
</tr>
<tr>
<td>1730h</td>
<td>Break</td>
</tr>
<tr>
<td>1800h</td>
<td>1</td>
</tr>
<tr>
<td>1830h</td>
<td>2</td>
</tr>
<tr>
<td>1900h</td>
<td>2</td>
</tr>
<tr>
<td>1930h</td>
<td>2</td>
</tr>
<tr>
<td>2000h</td>
<td>2</td>
</tr>
<tr>
<td>2100h</td>
<td>2</td>
</tr>
<tr>
<td>2200h</td>
<td>2</td>
</tr>
<tr>
<td>2300h</td>
<td>0</td>
</tr>
</table>
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
