import BaseModal from "./BaseModal";
import { getData } from "../services/storage";
import { useParams } from "react-router-dom";

type TrackType =
  | "temp"
  | "air"
  | "soil"
  | "light"
  | "irrigation"
  | "plague";

export default function TrackModal({
  onClose,
  item,
}: {
  onClose: () => void;
  item: TrackType;
}) {
  const data = getData();
  const { id } = useParams();

  const titleMap: Record<TrackType, string> = {
    temp: "Temperatura",
    air: "Umidade do ar",
    soil: "Umidade do solo",
    light: "Luminosidade",
    irrigation: "Irrigação",
    plague: "controle de pragas",
  };

  const historyMap = {
    temp: data.greenHouse.find((e) => e.id === parseInt(id || "0"))?.history?.temperature || [],
    air: data.greenHouse.find((e) => e.id === parseInt(id || "0"))?.history?.airHumidity || [],
    soil: data.greenHouse.find((e) => e.id === parseInt(id || "0"))?.history?.soilHumidity || [],
    light: data.greenHouse.find((e) => e.id === parseInt(id || "0"))?.history?.luminosity || [],
    irrigation: data.greenHouse.find((e) => e.id === parseInt(id || "0"))?.history?.irrigation || [],
    plague: data.greenHouse.find((e) => e.id === parseInt(id || "0"))?.plagueControle || [],
  };

  const history = historyMap[item];

  return (
    <BaseModal onClose={onClose}>
      <h2 className="text-xl font-bold mb-4 text-center">
        Histórico de {titleMap[item]}
      </h2>

      {/* 🔥 CASO PRAGAS */}
      {item === "plague" ? (
        <div className="divide-y border rounded-xl overflow-hidden">
          {history.map((occ: any, i: number) => (
            <div
              key={i}
              className="flex justify-between items-center p-4 bg-gray-50"
            >
              <span className="text-lg">
                {occ.text}
              </span>

              <span className="text-sm text-gray-600 whitespace-nowrap">
                {formatDate(occ.date)}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-2">
          {(historyMap[item] as number[]).map((tracking, i) => (
            <div
              key={i}
              className="flex justify-between bg-gray-100 p-2 rounded"
            >
              <span>Dia {i + 1}</span>
              <span className="font-bold">{tracking}</span>
            </div>
          ))}
        </div>
      )}
    </BaseModal>
  );
}

function formatDate(date: string) {
  const d = new Date(date);
  return d.toLocaleDateString("pt-BR");
}