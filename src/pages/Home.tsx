import { useEffect, useState } from "react";
import { getData } from "../services/storage";
import type { Data } from "../types";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [data, setData] = useState<Data | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    setData(getData());
  }, []);

  if (!data) return <p>Carregando...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Estufas</h1>

      <div className="grid grid-cols-2 gap-4">
        {data.estufas.map((e) => (
          <div
            key={e.id}
            className="card cursor-pointer"
            onClick={() => navigate(`/estufa/${e.id}`)}
          >
            <h2 className="font-bold">{e.nome}</h2>
            <p>🌡 {e.temperatura}°C</p>
            <p>💧 Solo: {e.umidadeSolo}%</p>
            <p>☀ {e.luminosidade} lux</p>
            <p>
              Irrigação:
              <span className={e.irrigacao ? "text-green-600" : "text-red-600"}>
                {e.irrigacao ? " Ativa" : " Desligada"}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}