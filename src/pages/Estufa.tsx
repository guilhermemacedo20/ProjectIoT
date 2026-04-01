import HeaderComponent from "../components/Header";
import { useState } from "react";
import TemperatureModal from "../components/TemperatureModal";
import { useEstufaData } from "../hooks/data";
import PlagueControlModal from "../components/PlagueControlModal";
import { useParams } from "react-router-dom";

export default function Estufa() {
  const { id } = useParams();
  const { data } = useEstufaData();
  const estufa = data.greenHouse.find((e) => e.id === parseInt(id || "0"));

  const [openTemp, setOpenTemp] = useState(false);
  const [openSchedule, setOpenSchedule] = useState(false);


  if (!estufa) return <p>Estufa não encontrada</p>;

  return (
    <>
      <HeaderComponent />
        <h1 className="text-3xl font-bold text-center mb-8 uppercase">
          Estufa {estufa.name}
        </h1>
        <section className="flex gap-6 mx-auto w-[90%]">
          <div className="flex w-[70%]">  
            <div className="flex flex-col w-full gap-8">
              <div className="flex gap-6 w-full">
                <div className="bg-white rounded-3xl shadow p-4 relative w-full">
                  <div className="bg-green-900 text-white text-center py-2 rounded-full font-bold">
                    Temperatura
                  </div>

                  <div className="mt-4 text-3xl font-bold">
                    🌡 {estufa.temperature}°C
                  </div>

                  <button
                    onClick={() => setOpenTemp(true)}
                    className="absolute bottom-3 right-3 bg-green-400 w-10 h-10 rounded-full text-xl"
                  >
                    +
                  </button>
                </div>

                <div className="bg-white rounded-3xl shadow p-4 relative w-full">
                  <div className="bg-green-900 text-white text-center py-2 rounded-full font-bold">
                    Umidade do ar
                  </div>
                  <div className="mt-4 text-3xl font-bold">
                    💨 {estufa.airHumidity}%
                  </div>
                </div>

                <div className="bg-white rounded-3xl shadow p-4 relative w-full">
                  <div className="bg-green-900 text-white text-center py-2 rounded-full font-bold">
                    Umidade do solo
                  </div>
                  <div className="mt-4 text-3xl font-bold">
                    🌱 {estufa.soilHumidity}%
                  </div>
                </div>
              </div>
              <div className="flex gap-6 w-full">
                <div className="bg-white rounded-3xl shadow p-4 relative w-[70%]">
                  <div className="bg-green-900 text-white text-center py-2 rounded-full font-bold">
                    Intensidade luminosa
                  </div>

                  <div className="mt-4 text-3xl font-bold text-right pr-4">
                    {estufa.luminosity} lux
                  </div>

                  <button
                    onClick={() => setOpenTemp(true)}
                    className="absolute bottom-3 right-3 bg-green-400 w-10 h-10 rounded-full text-xl"
                  >
                    +
                  </button>
                </div>
                <div className="flex flex-col w-[30%] gap-4">
                  <div className="bg-[#3d1700] rounded-3xl shadow p-4 relative w-full justify-center items-center flex flex-col gap-4">
                    <p className=" text-white rounded px-4 py-2 text-xl font-bold">VENTILAÇÃO</p>
                   <button
                      onClick={() => setOpenTemp(true)}
                      className=" text-white rounded px-4 py-2 text-xl font-bold"
                    >
                      <span
                        className={`px-6 py-2 rounded-full font-bold text-xl text-white ${
                          estufa.ventilation ? "bg-green-700" : "bg-red-600"
                        }`}
                      >
                        {estufa.ventilation ? "ATIVA" : "DESLIGADA"}
                      </span>
                    </button>
                  </div>
                  <div className="bg-[#3d1700] rounded-3xl shadow p-4 relative w-full justify-center items-center flex flex-col gap-4">
                    <p className=" text-white rounded px-4 py-2 text-xl font-bold">ILUMINAÇÃO</p>
                   <button
                      onClick={() => setOpenTemp(true)}
                      className="text-white rounded px-4 py-2 text-xl font-bold"
                    >
                      <span
                        className={`px-6 py-2 rounded-full font-bold text-xl text-white ${
                          estufa.ilumination ? "bg-green-700" : "bg-red-600"
                        }`}
                      >
                        {estufa.ilumination ? "ATIVA" : "DESLIGADA"}
                      </span>
                    </button>
                  </div>
                </div>
                
              </div>
            </div>      
          </div>

          <aside className="flex flex-col gap-8 w-[30%]"> 
            <div className="bg-gradient-to-r from-green-200 to-blue-300 rounded-3xl p-6 flex justify-between items-center flex-col gap-6">
              <div className="flex gap-4 items-center">              
                <span className="text-2xl font-bold">Status irrigação:</span>

                <span
                  className={`px-6 py-2 rounded-full font-bold text-xl text-white ${
                    estufa.irrigation ? "bg-green-700" : "bg-red-600"
                  }`}
                >
                  {estufa.irrigation ? "ATIVA" : "DESLIGADA"}
                </span>
              </div>
              <div className="flex gap-12">
                <button
                  onClick={() => setOpenTemp(true)}
                  className="bg-[#3d1700] text-white rounded px-8 py-4 text-xl font-bold"
                >
                  Histórico
                </button>
                <button
                  onClick={() => setOpenTemp(true)}
                  className="bg-[#3d1700] text-white rounded px-8 py-4 text-xl font-bold"
                >
                  + Adicionar ocorrência
                </button>
              </div>
            </div>
            <div className="bg-white rounded-3xl shadow p-4 relative">
                <div className="bg-green-900 text-white text-center py-2 rounded-full font-bold">
                  Controle de pragas
                </div>
                <div className="flex my-4 w-full gap-4">                
                  <div className="w-[50%] bg-[#c1ff72] p-4">
                    <p className="text-center text-xl font-bold mb-2">
                      <span className="mr-2 font-bold text-center">Alerta de pragas:</span>
                    </p>
                    <p className="text-center text-xl font-bold ">
                      <span className="text-[#003d20] font-bold">INATIVO</span>
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 w-[50%]">
                    <button
                      onClick={() => setOpenTemp(true)}
                      className="bg-[#3d1700] text-white rounded px-4 py-2 text-xl font-bold"
                    >
                      Histórico
                    </button>
                    <button
                      onClick={() => setOpenTemp(true)}
                      className="bg-[#3d1700] text-white rounded px-4 py-2 text-xl font-bold"
                    >
                      + Adicionar ocorrência
                    </button>
                  </div>
                </div>

               
              </div>
          </aside>
        </section>
        {openTemp && (
          <TemperatureModal onClose={() => setOpenTemp(false)} />
        )}

        {openSchedule && (
          <PlagueControlModal onClose={() => setOpenSchedule(false)} />
        )}
    </>
  );
}