import React, { useContext, useEffect, useState } from "react";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  const URL = "http://localhost:8000/users/";

  const signup = (username, password) => {
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        setCurrentUser(data);
        console.log(currentUser);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const logout = () => {
    setCurrentUser(null);
    window.location.reload();
  };

  const login = (username, password) => {
    fetch(URL + username + "/" + password, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const value = {
    currentUser,
    signup,
    logout,
    login,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
