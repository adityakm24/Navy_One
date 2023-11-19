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
        </div>
        </div>
  );
};

export default ShoppingComplex;
