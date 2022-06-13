import React from "react";
import DoughnutChart from "./charts/DoughnutChart";

export default function UserCard({ data, name, forWhat }) {
  return (
    <div className="white-glassmorphism p-4 m-4 flex flex-col justify-start items-start col-span-1">
      <h1 className="title-text text-2xl">{name}</h1>
      <p className="text-gray-100">Username: {data.username}</p>
      <p className="text-gray-100">Played: {data.played}</p>
      <p className="text-gray-100">Victories: {data.victory}</p>
      <DoughnutChart
        chartData={{
          labels: ["Played", "Victories"],
          datasets: [
            {
              label: "Clear/Deaths ratio",
              data: [data.played, data.victory],
              backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
              hoverOffset: 4,
              color: "white"
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
