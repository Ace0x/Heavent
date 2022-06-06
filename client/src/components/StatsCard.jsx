import React from "react";
import DoughnutChart from "./charts/DoughnutChart";

export default function StatsCard({ data, name }) {

  return (
    <div className="white-glassmorphism p-4 m-4 flex flex-col justify-start items-start">
      <h1 className="title-text text-2xl">{name}</h1>
      <p className="text-gray-100">Level ID: {data.levelId}</p>
      <p className="text-gray-100">Total clears: {data.victories}</p>
      <p className="text-gray-100">Total Deaths: {data.deaths}</p>
      <p className="text-gray-100">Best Time: {data.time}</p>
  
    </div>
  );
}
