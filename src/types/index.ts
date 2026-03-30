export interface GreenHouse {
  id: number;
  name: string;
  temperature: number;
  airHumidity: number;
  soilHumidity: number;
  luminosity: number;
  irrigation: boolean;
}

export interface Alert {
  id: number;
  tipo: string;
  msg: string;
}

export interface Data {
  greenHouse: GreenHouse[];
  alerts: Alert[];
}