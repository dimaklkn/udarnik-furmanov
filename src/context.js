import React, { useState, useContext } from "react";
import data from "./data/data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const randomYearObject = data[Math.floor(Math.random() * data.length)];

  const [resultYearObject, setResultYearObject] = useState(randomYearObject);
  const [numberYear, setNumberYear] = useState(randomYearObject.year);

  const findYearObject = (year) => {
    return data.find((item) => item.year === year);
  };

  return (
    <AppContext.Provider
      value={{
        resultYearObject,
        setResultYearObject,
        findYearObject,
        numberYear,
        setNumberYear,
        randomYearObject,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
