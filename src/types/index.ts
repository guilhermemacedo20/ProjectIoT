export interface GreenHouse {
  id: number;
  name: string;
  temperature: number;
  airHumidity: number;
  soilHumidity: number;
  luminosity: number;
  irrigation: boolean;
  waterConsumption: number;
}

export interface Alert {
  id: number;
  type: string;
  msg: string;
}

export interface Data {
  greenHouse: GreenHouse[];
  alerts: Alert[];
}