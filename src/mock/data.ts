import type { Data } from "../types";

export const initialData: Data = {
  estufas: [
    {
      id: 1,
      nome: "Alface",
      temperatura: 24,
      umidadeAr: 68,
      umidadeSolo: 45,
      luminosidade: 30000,
      irrigacao: true,
    },
    {
      id: 2,
      nome: "Repolho",
      temperatura: 20,
      umidadeAr: 75,
      umidadeSolo: 55,
      luminosidade: 50000,
      irrigacao: false,
    },
  ],
  alertas: [
    { id: 1, tipo: "Erro", msg: "Falha na irrigação" },
    { id: 2, tipo: "Crítico", msg: "Temperatura fora do padrão" },
  ],
};