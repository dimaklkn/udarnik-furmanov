import React from "react";
import { useGlobalContext } from "../context";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

//import components
import Event from "./Event";

const Events = () => {
  const { resultYearObject } = useGlobalContext();
  const { events } = resultYearObject;

  return (
    <div className="container events has-fade fade-in">
      <ResponsiveMasonry columnsCountBreakPoints={{ 300: 1, 640: 2, 1000: 3 }}>
        <Masonry gutter="1rem">
          {events.map((singleEvent, index) => {
            return <Event event={singleEvent} key={index} />;
          })}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Events;
