import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart({ chartData }) {

  return (
    <div>
      {" "}
      <Doughnut data={chartData} />
    </div>
  );
}
