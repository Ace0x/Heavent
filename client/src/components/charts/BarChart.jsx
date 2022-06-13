import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement);

export default function BarChart({ chartData, title }) {
  return (
    <div>
      <Bar
        data={chartData}
        options={{
          title: {
            display: true,
            text: title,
            fontSize: 20,
            color: "white",
          },
          legend: {
            display: true,
            position: "right",
            fontColor: "white",
            labels: {
              color: "rgb(255, 255, 255)",
              fontSize: 15,
            },
          },
          scales: {
            y: {
              ticks: { color: "white", beginAtZero: true },
            },
            x: {
              ticks: { color: "white", beginAtZero: true },
            },
          },
        }}
      />
    </div>
  );
}
