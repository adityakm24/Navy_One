import { useEffect, useState } from "react";
import BoxComponent from "./BoxComponent";
import Navbar from "./Navbar";
import styles from "../assets/styles/BoxContainer.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
      <div className="carousel-container">
        <Carousel
          autoPlay
          infiniteLoop
          interval={3000}
          className="custom-carousel"
          showStatus={true}
          showIndicators={true}
          centerMode={true}
          centerSlidePercentage={100}
          width={350} // Set your desired width
          height={250} // Set your desired height
        >
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      </div>

      <div className={styles.boxContainer}>
        <BoxComponent title={box1Title} items={box1Items} />
        <BoxComponent title={box2Title} items={box2Items} />
      </div>
    </div>
  );
};

export default Home;
