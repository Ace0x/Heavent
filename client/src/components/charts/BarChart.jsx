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
            labels: {
                fontColor: "blue",
                fontSize: 18
            }
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
