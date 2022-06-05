import React from "react";
import { useParams } from "react-router-dom";

export default function LevelStats() {
  let { levelId, userId } = useParams();

  return (
    <section>
      <h1 className="title-text text-4xl">Level Stats</h1>
      <p>Level ID: {levelId}</p>
    </section>
  );
}
