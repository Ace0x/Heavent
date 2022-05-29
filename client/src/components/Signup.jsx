import React, { useState } from "react";
import TextInput from "./inputs/TextInput";
import { useAuth } from "../context/authContext";
import { Navigate } from "react-router-dom";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { signup, currentUser } = useAuth();

  const onSignupClick = () => {
    console.log("signup");
    if (username && password) {
      signup(username, password);
      console.log();
    } else {
      setError("Please enter a username and password");
    }
  };

  return (
    <div className="mt-10 container flex flex-col justify-start items-start">
      <h1 className="title-text">Sign Up</h1>
      <TextInput title="Username" setState={setUsername} type="text" />
      <TextInput title="Password" setState={setPassword} type="password" />
      <button className="btn btn-primary" onClick={() => onSignupClick()}>
        Sign Up
      </button>
      {error && <p className="text-red-500 my-4">{error}</p>}
      {currentUser && <Navigate to="/"></Navigate>}
    </div>
  );
}
