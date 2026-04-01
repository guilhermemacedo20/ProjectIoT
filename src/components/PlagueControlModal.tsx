import { useState } from "react";
import BaseModal from "./BaseModal";
import { useEstufaData } from "../hooks/data";

export default function PlagueControlModal({ onClose }: any) {
  const { data, updateData } = useEstufaData();

  const [time, setTime] = useState("08:30");
  const [duration, setDuration] = useState("1 hora");
  const [days, setDays] = useState<string[]>([]);

  const toggleDay = (day: string) => {
    setDays((prev) =>
      prev.includes(day)
        ? prev.filter((d) => d !== day)
        : [...prev, day]
    );
  };

  const handleSave = () => {
    const newData = { ...data };

    // MOCK: salvar programação
    if (!newData.schedule) newData.schedule = [];

    newData.schedule.push({
      id: Date.now(),
      time,
      duration,
      days,
    });

    updateData(newData);
    onClose();
  };

  return (
    <BaseModal onClose={onClose}>
      <div className="space-y-4">
        <div>
          <label>Hora</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label>Duração</label>
          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full border rounded p-2"
          >
            <option>1 hora</option>
            <option>2 horas</option>
          </select>
        </div>

        <div>
          <label>Dias</label>
          <div className="flex gap-2 flex-wrap mt-2">
            {["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"].map((d) => (
              <button
                key={d}
                onClick={() => toggleDay(d)}
                className={`px-3 py-1 rounded-full border ${
                  days.includes(d)
                    ? "bg-green-600 text-white"
                    : "bg-gray-200"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleSave}
          className="bg-green-900 text-white px-6 py-2 rounded-full ml-auto block"
        >
          Agendar
        </button>
      </div>
    </BaseModal>
  );
}