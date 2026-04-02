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
      plagueControle:[{
        date: "2024-06-01",
        text: "Aplicação de fungicida para controle de oídio"
      }],
      history:{
        temperature: [20, 22, 21],
        airHumidity: [60, 65, 70],
        soilHumidity: [40, 45, 50],
        luminosity: [30000, 32000, 28000],
        irrigation: [1, 0, 1],
      }
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
      plagueControle:[{
        date: "2024-06-01",
        text: "Aplicação de fungicida para controle de oídio"
      }],
      history:{
        temperature: [20, 22, 21],
        airHumidity: [60, 65, 70],
        soilHumidity: [40, 45, 50],
        luminosity: [30000, 32000, 28000],
        irrigation: [1, 0, 1],
      }
    },
  ],
  alerts: [
    { id: 1, type: "Erro", msg: "Falha na irrigação" },
    { id: 2, type: "Crítico", msg: "Temperatura fora do padrão" },
  ]
};