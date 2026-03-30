import { useParams } from "react-router-dom";
import { getData } from "../services/storage";
import ChartComponent from "../components/Chart";

export default function Estufa() {
  const { id } = useParams();
  const data = getData();

  const estufa = data.greenHouse.find((e) => e.id === Number(id));

  if (!estufa) return <p>Estufa não encontrada</p>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">{estufa.name}</h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="card">🌡 {estufa.temperature}°C</div>
        <div className="card">💧 {estufa.airHumidity}%</div>
        <div className="card">🌱 {estufa.soilHumidity}%</div>
      </div>

      <div className="mt-6">
        <ChartComponent />
      </div>
    </div>
  );
}