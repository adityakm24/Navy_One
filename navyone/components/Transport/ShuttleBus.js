import { useEffect, useState } from "react";
import Navbar from "../Navbar";
import SideNav from "../SideNav";
import styles from "../../assets/styles/SpecialBooking.module.css";
import Image from 'next/image';
const ShuttleBus = () => {
  const nodes = ["Travancore gate", "War Memorial", "Node 3", "Node 4", "Node 5", "Node 6", "Node 7", "Node 8", "Node 9", "Node 10"];
  const arrows = [{ from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 4 }, { from: 4, to: 5 }, { from: 5, to: 6 }, { from: 6, to: 7 }, { from: 7, to: 8 }, { from: 8, to: 9 }, { from: 9, to: 0 }];

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
        <div style={{ margin: '15px 0 0 420px', position: 'relative' }}>
          <Image
            src="/kochi.png"
            alt="pic"
            width={780}
            height={200}
          />
        </div>
        <div style={{ paddingLeft: "150px", margin: '15px 300px 0 300px', width: '800px' }}>
          <center><h4><b><u>TIMING OF SHUTTLE SERVICE</u></b></h4></center>
          <center>
            <table border="0">
              <tr>
                <td><center>0700 - 01 Trip</center></td>
                <td><center>1700h - 01 Trip</center></td>
              </tr>
              <tr>
                <td><center>0730 - 01 Trip</center></td>
                <td><center>1730h - 01 Trip</center></td>
              </tr>
              <tr>
                <td><center>0800 - 01 Trip</center></td>
                <td><center>1800h - 01 Trip</center></td>
              </tr>
              <tr>
                <td><center>0815 - 01 Trip</center></td>
                <td><center>1830h - 01 Trip</center></td>
              </tr>
              <tr>
                <td><center>0830 - 01 Trip</center></td>
                <td><center>1900h - 01 Trip</center></td>
              </tr>
              <tr>
                <td><center>0845 - 01 Trip</center></td>
                <td><center>1930h - 01 Trip</center></td>
              </tr>
              <tr>
                <td><center>0900 - 01 Trip</center></td>
                <td><center>2000h - 01 Trip</center></td>
              </tr>
              <tr>
                <td><center>0930 - 01 Trip</center></td>
                <td><center>2100h - 01 Trip</center></td>
              </tr>
              <tr>
                <td><center>1000h* - 01 Trip</center></td>
                <td><center>2200h - 01 Trip</center></td>
              </tr>
              <tr>
                <td><center>1030h - 01 Trip</center></td>
                <td><center>2300h - 01 Trip</center></td>
              </tr>
              <tr>
                <td><center>1100h - 01 Trip</center></td>
                <td><center></center></td>
              </tr>
              <tr>
                <td><center>1130h** - 01 Trip</center></td>
                <td><center></center></td>
              </tr>
              <tr>
                <td><center>1200h** - 02 Trip</center></td>
                <td><center></center></td>
              </tr>
              <tr>
                <td><center>1230h** - 01 Trip</center></td>
                <td><center></center></td>
              </tr>
              <tr>
                <td><center>1300h** - 01 Trip</center></td>
                <td><center></center></td>
              </tr>
              <tr>
                <td><center>1445h - 01 Trip</center></td>
                <td><center></center></td>
              </tr>
              <tr>
                <td><center>1530h** - 02 Trip</center></td>
                <td><center></center></td>
              </tr>
              <tr>
                <td><center>1600h** - 02 Trip</center></td>
                <td><center></center></td>
              </tr>
              <tr>
                <td><center>1620h** - 01 Trip</center></td>
                <td><center></center></td>
              </tr>
            </table>
          </center>
        </div>
        <div style={{ margin: '15px 0 0 450px' }}>
          <p><b>* ADDITIONAL SHUTTLE BUS SERVICE AS PER AVAILABILITY OF BUSES</b></p>
          <p><b>* Personnel Coming in between 2000-2300hrs may contact duty JCO at Travancore or Contact MT Pool on 9496450666 for transport requirements. The vehicle will be provided will be provided for personnel in groups as per availability.</b></p>
        </div>
      </div>
    </div>
  );
};

export default ShuttleBus;
