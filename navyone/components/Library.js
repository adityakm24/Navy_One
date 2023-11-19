import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import SideNav from "./SideNav";
import styles from "../assets/styles/SpecialBooking.module.css";

const Library = () => {
  return (
    <div>
      <Navbar />
      <SideNav />
      <div className={styles.bodyContent}>
        <div>
          <h1 className={styles.header}>Library</h1>
        </div>

       
        </div>
      </div>

  );
};

export default Library;
