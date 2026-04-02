export interface GreenHouse {
  id: number;
  name: string;
  temperature: number;
  airHumidity: number;
  soilHumidity: number;
  luminosity: number;
  irrigation: boolean;
  waterConsumption: number;
  ilumination: boolean;
  ventilation: boolean;
   history: {
    temperature: number[];
    airHumidity: number[];
    soilHumidity: number[];
    luminosity: number[];
    irrigation: number[];
  },
  plagueControle:PlagueControle[]
}

export interface Alert {
  id: number;
  type: string;
  msg: string;
}

export interface Schedule {
  id: number;
  time: string;
  duration: string;
  days: string[];
}
export interface PlagueControle {
  date: string;
  text: string;
}

export interface Data {
  greenHouse: GreenHouse[];
  alerts: Alert[];
  schedule?: Schedule[];
}