import React from "react";
import Signup from "../components/Signup";
import Login from "../components/Login";

export default function Auth({ authType }) {
  return (
    <section>
      {authType === "signup" && <Signup />}
      {authType === "login" && <Login />}
    </section>
  );
}
