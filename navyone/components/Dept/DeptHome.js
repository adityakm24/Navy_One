import { useEffect, useState } from "react";
import BoxComponent from "../BoxComponent";
import Carousal from "../Carousal";
import styles from "../assets/styles/BoxContainer.module.css";
import AdminNavbar from "../Admin/AdminNavbar";
import DepartmentSideNav from "@/components/Dept/DepartmentSideNav";

const images = ["./gallery/pic1.jpg", "./logo/INS.jpg", "./logo/INS.jpg"];

const Home = () => {
  const box1Title = "Advisory";
  const box1Items = [
    "Residents of SMA Advisory",
    "Changes in Bus Timings",
    "Changes in Pool Timings",
  ];

  const box2Title = "Drive";
  const box2Items = [
    "NWWWA Milan",
    "Avengers 3 Movie Screening...",
    "Lecture on the occasion of World Health Day",
  ];

  return (
    <div>
      <AdminNavbar />
      <DepartmentSideNav />
      <div className={styles.bodyContent}>
        <div>
          <h1 className={styles.header}>Activities</h1>
          <Carousal />
        </div>

        <div className={styles.boxContainer}>
          <BoxComponent title={box1Title} items={box1Items} />
          <BoxComponent title={box2Title} items={box2Items} />
        </div>
      </div>
    </div>
  );
};

export default Home;
