import type { Data } from "../types";
import { initialData } from "../mock/data";

const KEY = "estufa_data";

export const getData = (): Data => {
  const data = localStorage.getItem(KEY);
  console.log(data)
  if (!data) {
    localStorage.setItem(KEY, JSON.stringify(initialData));
    return initialData;
  }
  return JSON.parse(data);
};

export const saveData = (data: Data) => {
  localStorage.setItem(KEY, JSON.stringify(data));
};