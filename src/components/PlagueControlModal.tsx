import { useState } from "react";
import BaseModal from "./BaseModal";
import { getData, saveData } from "../services/storage";
import { useParams } from "react-router-dom";

export default function PlagueControlModal({ onClose }: { onClose: () => void }) {
  const { id } = useParams();
  const [date, setDate] = useState("");
  const [text, setText] = useState("");

  const handleSave = () => {
    if (!date || !text) return;

    const data = getData();

    const newOccurrence = {
      date,
      text,
    };

    const updatedData = {
      ...data,
      greenHouse: data.greenHouse.map((greenHouse) => {
      if (greenHouse.id !== parseInt(id || "0")) return greenHouse;

      return {
        ...greenHouse,
        plagueControle: [
          ...(greenHouse.plagueControle || []),
          newOccurrence,
        ],
      };
    }),
    };

    saveData(updatedData);

    onClose();
  };

  return (
    <BaseModal onClose={onClose}>
      <h2 className="text-xl font-bold mb-4">
        Adicionar ocorrência (Controle de pragas)
      </h2>

      <div className="flex flex-col gap-4">
        <input
          type="date"
          className="border p-2 rounded"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <textarea
          placeholder="Descreva a ocorrência..."
          className="border p-2 rounded"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button
          onClick={handleSave}
          className="bg-green-600 text-white py-2 rounded font-bold"
        >
          Salvar
        </button>
      </div>
    </BaseModal>
  );
}