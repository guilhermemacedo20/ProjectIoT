import { useEffect, useState } from "react";
import { getData } from "../services/storage";
import type { Data } from "../types";
import { useNavigate } from "react-router-dom";
import HeaderComponent from "../components/Header";

export default function Home() {
  const [data, setData] = useState<Data | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    setData(getData());
  }, []);

  if (!data) return <p>Carregando...</p>;

  return (
    <div className="p-6">
      <HeaderComponent />
      <h1 className="text-2xl font-bold mb-4">Estufas</h1>

      <div className="grid grid-cols-2 gap-4">
        {data.greenHouse.map((e) => (
          <div
            key={e.id}
            className="card cursor-pointer"
            onClick={() => navigate(`/estufa/${e.id}`)}
          >
            <h2 className="font-bold">{e.name}</h2>
            <p>🌡 {e.temperature}°C</p>
            <p>💧 Solo: {e.soilHumidity}%</p>
            <p>☀ {e.luminosity} lux</p>
            <p>
              Irrigação:
              <span className={e.irrigation ? "text-green-600" : "text-red-600"}>
                {e.irrigation ? " Ativa" : " Desligada"}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}