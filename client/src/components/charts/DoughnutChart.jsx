import React from "react";
import { Doughnut } from "react-chartjs-2";

export default function DoughnutChart({ chartData }) {
  return (
    <div>
      {" "}
      <Doughnut data={chartData} />
    </div>
  );
}
