import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function ChartComponent() {
  const data = {
    labels: ["Seg", "Ter", "Qua", "Qui", "Sex"],
    datasets: [
      {
        label: "Temperatura",
        data: [20, 22, 21, 25, 23],
      },
    ],
  };

  return <Line data={data} />;
}