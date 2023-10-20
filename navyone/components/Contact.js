import { useEffect, useState } from "react";
import BoxComponent from "./BoxComponent";
import Navbar from "./Navbar";
import SideNav from "./SideNav";
import styles from "../assets/styles/Contact.module.css";

const images = ["./gallery/pic1.jpg", "./logo/INS.jpg", "./logo/INS.jpg"];

const Contact = () => {
  const box1Title = "OOD Venduruthy";
  const box1Items = ["0484 289 2529/2530"];

  const box2Title = "MI Room";
  const box2Items = [
    "Sanjivani Reception 0484 289 2517",
    "Sanjivani DMO  0484 289 4472",
  ];

  const box3Title = "Fire Station";
  const box3Items = ["Vthy Fire Stn. 0484 289 2300/2425"];

  const box4Title = "NORA /SMA";
  const box4Items = ["0484 289 2468/2469"];

  const box5Title = "MT Pool";
  const box5Items = ["0484 289 2468/2469"];

    const box6Title = "School Numbers";
    const box6Items = ["Naval KG 0484 287 2493", "NCS 0484 287 4793", "KV 1 0484 266 8472", "KV 2 0484 668 344", "KV Port Trust 0484 266 7102", "KV INS Drona 0484 223 1399","KV Kadvanthra 0484 220 4785"];

  return (
    <div>
      <Navbar />
      <SideNav />
      <div className={styles.bodyContent}>
        <div>
          <h1 className={styles.header}>Important Contact Numbers</h1>
        </div>

        <div className={styles.boxContainer}>
          <BoxComponent title={box1Title} items={box1Items} />
          <BoxComponent title={box2Title} items={box2Items} />
          <BoxComponent title={box3Title} items={box3Items} />
          <BoxComponent title={box4Title} items={box4Items} />
          <BoxComponent title={box5Title} items={box5Items} />
          <BoxComponent title={box6Title} items={box6Items} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
