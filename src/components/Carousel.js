import React, { useState } from "react";

//import data
import data from "../data/data.js";
//import components
import YearPicker from "./YearPicker";

const Carousel = () => {
  // Functionality of carousel
  let width = window.innerWidth;
  const [currentIndex, setCurrentIndex] = useState(0);
  const mover = width > 700 ? 10 : 5;

  const goToRight = () => {
    const newIndex = currentIndex + mover;
    setCurrentIndex(newIndex);
  };
  const goToLeft = () => {
    const newIndex = currentIndex - mover;
    setCurrentIndex(newIndex);
  };

  return (
    <nav className="container carousel">
      <button
        className={
          currentIndex === 0 ? "btn btnLeft" : "btn btnLeft btn-active"
        }
        onClick={goToLeft}
        disabled={currentIndex === 0}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
      </button>
      <div className="carousel__scroller">
        <div className="carousel__scroller-inner">
          {data.map((year, index) => {
            if (index >= currentIndex && index < currentIndex + mover) {
              return <YearPicker year={year.year} key={year.year} />;
            } else {
              return null;
            }
          })}
        </div>
      </div>
      <button
        className={
          currentIndex >= data.length - mover
            ? "btn btnRight"
            : "btn btnRight btn-active"
        }
        onClick={goToRight}
        disabled={currentIndex >= data.length - mover}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </button>
    </nav>
  );
};

export default Carousel;
