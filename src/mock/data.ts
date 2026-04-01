import type { Data } from "../types";

export const initialData: Data = {
  greenHouse: [
    {
      id: 1,
      name: "Alface",
      temperature: 24,
      airHumidity: 68,
      soilHumidity: 45,
      luminosity: 30000,
      irrigation: true,
      waterConsumption: 120,
      ventilation: true,
      ilumination: false,
    },
    {
      id: 2,
      name: "Repolho",
      temperature: 20,
      airHumidity: 75,
      soilHumidity: 55,
      luminosity: 50000,
      irrigation: false,
      waterConsumption: 80,
      ventilation: false,
      ilumination: true,
    },
  ],
  alerts: [
    { id: 1, type: "Erro", msg: "Falha na irrigação" },
    { id: 2, type: "Crítico", msg: "Temperatura fora do padrão" },
  ],
};