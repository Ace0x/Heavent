import React from "react";
import DoughnutChart from "./charts/DoughnutChart";

export default function StatsCompareCard({ data }) {
  return (
    <div className="white-glassmorphism p-4 m-4 flex flex-col justify-start items-start">
      <p className="text-gray-100">Level ID: {data.levelId}</p>
      <p className="text-gray-100">Total clears: {data.victories}</p>
      <p className="text-gray-100">Total Deaths: {data.deaths}</p>
      <p className="text-gray-100">Best Time: {data.time}</p>
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
    </div>
  );
}
