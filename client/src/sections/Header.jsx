import React from "react";
import { useAuth } from "../context/authContext";

export default function Header() {
  const { currentUser } = useAuth();

  return (
    <section id="header" className="justify-center">
      <h1 className="title-text text-center text-8xl shadow-2xl">
        Hea<span style={{ fontSize: "12rem" }}>V</span>en't
      </h1>
      <p className="subtitle-text">Heaven doens't lie here</p>
      <br />
      <div className="border-white border-4 hover:rounded-full rounded-lg bg-transparent subtitle-text px-8 text-4xl m-8">
        Play
      </div>
    </section>
    
  );
}
