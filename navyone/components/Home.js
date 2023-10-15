import { useEffect, useState } from "react";
import BoxComponent from "./BoxComponent";
import Navbar from "./Navbar";
import Carousal from "./Carousal";
import SideNav from "./SideNav";
import styles from "../assets/styles/BoxContainer.module.css";

const images = ["./gallery/pic1.jpg", "./logo/INS.jpg", "./logo/INS.jpg"];

const Home = () => {
  const box1Title = "Advisory";
  const box1Items = ["Residents of SMA Advisory", "Changes in Bus Timings"];

  const box2Title = "Drive";
  const box2Items = [
    "NWWWA Milan",
    "Avengers 3 Movie Screening...",
    "Lecture on the occasion of World Health Day",
  ];

  return (
    <div>
      <Navbar />
      <SideNav />
      <div className={styles.bodyContent}>
        <div>
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
