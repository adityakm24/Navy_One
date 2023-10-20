import React, { useState, useEffect } from "react";
import styles from "../assets/styles/Carasoual.module.css"; // Import the CSS module

const images = [
  "./gallery/pic1.jpg",
  "./gallery/pic2.jpg",
  "./gallery/pic3.jpg",
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <div className={styles.carouselContainer}>
        <div className={styles.carousel}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`${styles.slide} ${
                currentSlide === index ? styles.active : ""
              }`}
            >
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className={styles.slideImage}
              />
            </div>
          ))}
          {/* 
<button className={styles.prevButton} onClick={prevSlide}>
  Previous
</button>
<button className={styles.nextButton} onClick={nextSlide}>
  Next
</button>
*/}
        </div>
        <div className={styles.indicators}>
          {images.map((_, index) => (
            <div
              key={index}
              className={`${styles.indicator} ${
                currentSlide === index ? styles.activeIndicator : ""
              }`}
              onClick={() => setCurrentSlide(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
