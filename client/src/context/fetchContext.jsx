import React, { useContext, useEffect, useState } from "react";

const FetchContext = React.createContext();

export function useFetch() {
  return useContext(FetchContext);
}

export function FetchProvider({ children }) {
  const [userLevels, setUserLevels] = useState([]);
  const [userLevelsError, setUserLevelErrors] = useState();

  const URLLEVEL = "http://localhost:8000/levels/";

  const getUserLevels = (userId) => {
    fetch(URLLEVEL + "users/" + userId, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUserLevels(data);
      })
      .catch((error) => {
        console.error("Error:", error);
        setUserLevelErrors(error);
      });
  };

  const value = {
    getUserLevels,
    userLevels,
    userLevelsError,
  };

  return (
    <FetchContext.Provider value={value}>{children}</FetchContext.Provider>
  );
}
