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
    <>
      <HeaderComponent />
      <section className="m-12">
        <div className="grid grid-cols-2 gap-4 ">
        {data.greenHouse.map((e) => (
          <div
            key={e.id}
            className="card cursor-pointer rounded-full"
            onClick={() => navigate(`/estufa/${e.id}`)}
          >
            <h2 className="font-bold text-white bg-[#654321] px-6 py-2">Estufa {e.id} - {e.name}</h2>
            <div className="p-4">
              <div className="flex flex-wrap">
                <p className="w-[50%]">🌡 {e.temperature}°C</p>
                <p className="w-[50%]">{e.airHumidity}</p>
                <p className="w-[50%]">☀ {e.luminosity} lux</p>
                <p className="w-[50%]">💧 Solo: {e.soilHumidity}%</p>
              </div>
              <p className="w-full flex justify-center">
                Irrigação:
                <span className={`${e.irrigation ? "text-green-600" : "text-red-600"}`}>
                  {e.irrigation ? " Ativa" : " Desligada"}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
      </section>
      
    </>
  );
}