export type HyrecPowerSupply = 'solar' | 'network';

export interface HyrecStatus {
  idPiezo: string;
  idInstrument: string;
  arrowUpStatus: boolean;
  arrowDownStatus: boolean;
  ev1Status: boolean;
  ev2Status: boolean;
  tf3Position: number;
  h2oLevel: number;
  machineryEmunted: number;
  piezoEmunted: number;
  mediumFlow: number;
  dailyFlow: number;
  batteryLevel: number;
  powerSupply: HyrecPowerSupply;
  fcZs1: boolean;
  fcUp: boolean;
  fcDown: boolean;
  fs1Counter: number;
  tankLoStatus: boolean;
  pumpCounter: number;
  tankStatus: boolean;
}
