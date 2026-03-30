export interface Estufa {
  id: number;
  nome: string;
  temperatura: number;
  umidadeAr: number;
  umidadeSolo: number;
  luminosidade: number;
  irrigacao: boolean;
}

export interface Alerta {
  id: number;
  tipo: string;
  msg: string;
}

export interface Data {
  estufas: Estufa[];
  alertas: Alerta[];
}