import { useEffect, useState } from "react";
import { getData } from "../services/storage";
import type { Data } from "../types";
import { useNavigate } from "react-router-dom";
import HeaderComponent from "../components/Header";
import AlertModal from "../components/AlertModal";

export default function Home() {
  const [data, setData] = useState<Data | null>(null);
  const [openModal, setOpenModal] = useState(false);
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
          className="cursor-pointer rounded-[36px] bg-white shadow-md overflow-hidden "
          onClick={() => navigate(`/estufa/${e.id}`)}
        >
          <h2 className="font-bold text-white bg-[#654321] px-6 py-3 text-3xl rounded-t-[36px]">
            Estufa {e.id} - {e.name}
          </h2>

          <div className="p-6">
            <div className="grid grid-cols-2 gap-y-6 text-xl font-bold uppercase">
              <div className="flex items-center gap-3">
                <span>🌡</span>
                <span>Temperatura</span>
                <span className="text-2xl">{e.temperature}°C</span>
              </div>

              <div className="flex items-center gap-3 justify-start">
                <span>☁</span>
                <span>Umidade do ar</span>
                <span className="text-2xl">{e.airHumidity}%</span>
              </div>

              <div className="col-span-2 border-t border-black/30"></div>

              <div className="flex items-center gap-3">
                <span>☀</span>
                <span>Intensidade luminosa</span>
                <span className="text-2xl">{e.luminosity} lux</span>
              </div>

              <div className="flex items-center gap-3 justify-start">
                <span>🌱</span>
                <span>Umidade do solo</span>
                <span className="text-2xl">{e.soilHumidity}%</span>
              </div>

              <div className="col-span-2 border-t border-black/30"></div>

              <div className="col-span-2 flex justify-center mt-2">
                <div className="flex items-center gap-4 bg-gradient-to-r from-[#cddfd8] via-[#b7d0ec] to-[#94b9ff] rounded-full px-8 py-3">
                  <span className="uppercase font-bold text-xl">Irrigação</span>

                  <span
                    className={`text-white px-4 py-1 rounded-full uppercase font-bold text-lg ${
                      e.irrigation ? "bg-green-600" : "bg-red-600"
                    }`}
                  >
                    {e.irrigation ? "Ativa" : "Desligada"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        ))}
      </div>
      <div className="flex my-20 justify-center gap-12">
      <div className="flex items-center gap-12 bg-white rounded-[36px] p-6 shadow-md w-fit px-[5%]">
        <div className="text-6xl">🏢</div>

          <div className="flex gap-6">
            {data.greenHouse.map((e) => (
              <div
                key={e.id}
                className="bg-gradient-to-r from-[#b7d0c7] to-[#8fb3e8] rounded-[32px] px-6 py-4 min-w-[20%] text-center"
              >
                <div className="bg-[#063c3f] text-white font-bold rounded-full px-4 py-2 text-sm mb-4">
                  CONSUMO DIÁRIO <br /> ESTUFA {e.id}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-4xl font-bold">
                    {e.waterConsumption}L
                  </span>
                  <span className="text-3xl">💧</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center bg-white rounded-[36px] shadow-md overflow-hidden w-[35%] mx-12">
          <div className="w-full flex items-center justify-center gap-2 px-4 py-3 font-bold text-lg border-b border-black/30">
            <span>⚠️</span>
            <span>Alertas do Sistema</span>
          </div>

          <div className="py-6 text-red-600 text-2xl font-bold">
            {data.alerts.length === 0
              ? "Nenhum alerta no momento"
              : `${data.alerts.length} alerta(s) ativo(s)`}

          </div>

          <button
            onClick={() => setOpenModal(true)}
            className="mb-4 bg-[#8b0000] text-white px-6 py-2 rounded-full font-bold"
          >
            DETALHES
          </button>
        </div>
        </div>
      </section>

      {openModal && (
        <AlertModal
          alerts={data.alerts}
          onClose={() => setOpenModal(false)}
        />
      )}
      
    </>
    
  );
}