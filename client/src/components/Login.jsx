import React, { useState } from "react";
import TextInput from "./inputs/TextInput";
import { useAuth } from "../context/authContext";
import { Navigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login, currentUser, authError } = useAuth();

  const onLoginClick = () => {
    console.log("login");
    if (username && password) {
      login(username, password);
      console.log();
    } else {
      setError("Please enter a username and password");
    }
  };

  return (
    <div className="mt-4 container flex flex-col justify-start items-start">
      <h1 className="title-text">Log In</h1>
      <TextInput title="Username" setState={setUsername} type="text" />
      <TextInput title="Password" setState={setPassword} type="password" />
      <button
        className="border-white border-4 hover:rounded-full rounded-lg bg-transparent subtitle-text px-8 text-2xl m-2 hover:border-green-400 hover:text-green-400"
        onClick={() => onLoginClick()}
      >
        Log In
      </button>
      {error && <p className="text-red-500 my-4">{error}</p>}
      {authError && <p className="text-red-500 my-4">{authError}</p>}
      {currentUser && <Navigate to="/"></Navigate>}
    </div>
  );
}
