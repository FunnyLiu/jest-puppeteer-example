import React, { useContext, useState, useEffect } from "react";

const FilterContext = React.createContext(null);

/**
 * custom hooks
 */
export const useFilter = () => {
  const contextValue = useContext(FilterContext);
  return contextValue;
};

export const FilterProvider = props => {
  const { children } = props;
  const contextValue = useState("");
  const [filter, setFilter] = contextValue;

  //some effect function such as addeventlistener and data fetch
  //should be put in useEffect
  useEffect(() => {
    window.addEventListener(
      "hashchange",
      event => {
        const newUrl = event.newURL;
        const curHash = newUrl.split("/")[4];
        switch (curHash) {
          case "":
            setFilter("");
            break;
          case "active":
            setFilter("active");
            break;
          case "completed":
            setFilter("completed");
            break;
          default:
            setFilter("");
            break;
        }
      },
      false
    );
  }, []);

  return (
    <FilterContext.Provider value={contextValue}>
      {children}
    </FilterContext.Provider>
  );
};
