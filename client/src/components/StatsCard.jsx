import React from "react";

export default function StatsCard({ data, name }) {
  return (
    <div className="white-glassmorphism col-span-1 p-4 m-4 flex flex-col justify-start items-start">
      <h1 className="title-text text-2xl">{name}</h1>
      <p className="text-gray-100">Level ID: {data.levelId}</p>
        <p className="text-gray-100">Total clears: {data.totalVictories}</p>
        <p className="text-gray-100">Total Deaths: {data.totalDeaths}</p>
    </div>
  );
}
