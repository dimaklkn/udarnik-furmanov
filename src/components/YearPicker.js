import React from "react";
import { useGlobalContext } from "../context";

const YearPicker = (props) => {
  const { year } = props;
  const { setResultYearObject, findYearObject } = useGlobalContext();
  const yearObject = findYearObject(year);

  return (
    <div
      className="year-picker has-fade fade-in hover-underline-animation"
      onClick={() => {
        setResultYearObject(yearObject);
      }}
    >
      <p>{year}</p>
    </div>
  );
};

export default YearPicker;
