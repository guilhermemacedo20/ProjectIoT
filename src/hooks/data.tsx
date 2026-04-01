import { useState } from "react";
import { getData, saveData } from "../services/storage";
import type { Data } from "../types";

export function useEstufaData() {
  const [data, setData] = useState<Data>(getData());

  const updateData = (newData: Data) => {
    setData(newData);
    saveData(newData);
  };

  return { data, updateData };
}