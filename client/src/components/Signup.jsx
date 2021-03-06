import React, { useState } from "react";
import TextInput from "./inputs/TextInput";
import { useAuth } from "../context/authContext";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");

  const { signup, currentUser, authError } = useAuth();

  const onSignupClick = () => {
    console.log("signup");
    if (username && password && password === passwordConfirm) {
      signup(username, password);
      console.log();
    } else {
      if (password !== passwordConfirm) {
        setError("Passwords do not match");
      } else {
        setError("Please enter a username and password");
      }
    }
  };

  return (
    <div className="mt-4 container flex flex-col justify-start items-start">
      <h1 className="title-text">Sign Up</h1>
      <TextInput title="Username" setState={setUsername} type="text" />
      <TextInput title="Password" setState={setPassword} type="password" />
      <TextInput
        title="Confirm password"
        setState={setPasswordConfirm}
        type="password"
      />

      <button className="auth-button" onClick={() => onSignupClick()}>
        Sign Up
      </button>
      {error && <p className="text-red-500 my-4">{error}</p>}
      {authError && <p className="text-red-500 my-4">{authError}</p>}
      {currentUser && <Navigate to="/"></Navigate>}
      <p>
        Already have an account?{" "}
        <Link to="/login" className="text-blue-400">
          Log In
        </Link>
      </p>
    </div>
  );
}
