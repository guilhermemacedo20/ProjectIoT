import BaseModal from "./BaseModal";

const mockData = [20, 22, 21, 23, 26, 32, 28];

export default function TemperatureModal({ onClose }: any) {
  return (
    <BaseModal onClose={onClose}>
      <h2 className="text-xl font-bold mb-4">
        Histórico de Temperatura
      </h2>

      <div className="space-y-2">
        {mockData.map((temp, i) => (
          <div
            key={i}
            className="flex justify-between bg-gray-100 p-2 rounded"
          >
            <span>Dia {i + 1}</span>
            <span className="font-bold">{temp}°C</span>
          </div>
        ))}
      </div>
    </BaseModal>
  );
}