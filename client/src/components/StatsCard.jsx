import React from "react";
import DoughnutChart from "./charts/DoughnutChart";
import LevelStatsCompare from "./compareInputs/LevelStatsCompare";

export default function StatsCard({ data, name }) {
  return (
    <div className="white-glassmorphism p-4 m-4 flex flex-col justify-center items-center">
      <h1 className="title-text text-2xl">{name}</h1>
      <p className="text-gray-100">Level ID: {data.levelId}</p>
      <p className="text-gray-100">Total clears: {data.victories}</p>
      <p className="text-gray-100">Total Deaths: {data.deaths}</p>
      <p className="text-gray-100">Best Time: {data.time} seconds</p>
      <DoughnutChart
        chartData={{
          labels: ["Total Clears", "Total Deaths"],
          datasets: [
            {
              label: "Clear/Deaths ratio",
              data: [data.victories, data.deaths],
              backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
              hoverOffset: 4,
            },
          ],
        }}
        options={{
          legend: {
            labels: {
              fontColor: "white", //set your desired color
            },
          },
        }}
      />
      <LevelStatsCompare user1={data.userId} level={data.levelId} />
    </div>
  );
}
