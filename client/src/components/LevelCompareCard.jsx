import React from "react";
import { Navigate } from "react-router-dom";

export default function LevelCompareCard({ data }) {
  const [toStats, setToStats] = React.useState("");

  const onStatsClick = () => {
    setToStats("/levelstats/" + data.id + "/" + data.name);
  };

  return (
    <div
      className="white-glassmorphism col-span-1 p-4 m-4 flex flex-col justify-start items-start"
      key={data.id}
    >
      <h1 className="title-text text-2xl">{data.name}</h1>
      <p className="text-gray-100">Level ID: {data.id}</p>
      <p className="text-gray-100">Total clears: {data.totalVictories}</p>
      <p className="text-gray-100">Total Deaths: {data.totalDeaths}</p>

      <div className="auth-button" onClick={() => onStatsClick()}>
        My Stats
      </div>
      {toStats && <Navigate to={toStats}></Navigate>}
    </div>
  );
}
