import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { HyrecPowerSupply, HyrecStatus } from './hyrec-status';

const green = '#4caf50';
const red = '#f44336';
const white = '#ffffff';
const transparent = '#ffffff00';

const toggleStatus = (status?: boolean): string => {
  if (status === true) {
    return green;
  }
  if (status === false) {
    return red;
  }
  return transparent;
};

const indicatorStatus = (status?: boolean): string => {
  if (status === true) {
    return green;
  }
  return white;
};

const formatLevel = (level?: number): string => {
  if (level == null) {
    return '';
  }
  return `${level} m`.replace('.', ',');
};

const formatVolume = (volume?: number): string => {
  if (volume == null) {
    return '';
  }
  return `${volume} L`.replace('.', ',');
};

const formatMediumFlow = (flow?: number): string => {
  if (flow == null) {
    return '';
  }
  return `${flow} L/min`.replace('.', ',');
};

const formatDailyFlow = (flow?: number): string => {
  if (flow == null) {
    return '';
  }
  return `${flow} L/g`.replace('.', ',');
};

const formatCounter = (counter?: number): string => {
  if (counter == null) {
    return '';
  }
  return `${Math.round(counter)} cnt`;
};

const formatPercentage = (percentage?: number): string => {
  if (percentage == null) {
    return '';
  }
  return `${Math.round(percentage * 1000) / 10}%`;
};

@Component({
  selector: 'app-hyrec-pid',
  templateUrl: './hyrec-pid.component.html',
  styleUrls: ['./hyrec-pid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HyrecPidComponent {
  @Input()
  set status(status: any) {
    this.updateData(status);
  }

  private _idPiezo = '';
  get idPiezo(): string {
    return this._idPiezo;
  }

  private _idInstrument = '';
  get idInstrument(): string {
    return this._idInstrument;
  }

  private _arrowUpColor = transparent;
  get arrowUpColor(): string {
    return this._arrowUpColor;
  }

  private _arrowDownColor = transparent;
  get arrowDownColor(): string {
    return this._arrowDownColor;
  }

  private _ev1Color = transparent;
  get ev1Color(): string {
    return this._ev1Color;
  }

  private _ev2Color = transparent;
  get ev2Color(): string {
    return this._ev2Color;
  }

  private _tf3Position = '';
  get tf3Position(): string {
    return this._tf3Position;
  }

  private _h2oLevel = '';
  get h2oLevel(): string {
    return this._h2oLevel;
  }

  private _machineryEmunted = '';
  get machineryEmunted(): string {
    return this._machineryEmunted;
  }

  private _piezoEmunted = '';
  get piezoEmunted(): string {
    return this._piezoEmunted;
  }

  private _mediumFlow = '';
  get mediumFlow(): string {
    return this._mediumFlow;
  }

  private _dailyFlow = '';
  get dailyFlow(): string {
    return this._dailyFlow;
  }

  private _batteryLevel = '';
  get batteryLevel(): string {
    return this._batteryLevel;
  }

  private _powerSupply?: HyrecPowerSupply;
  get powerSupply(): HyrecPowerSupply | undefined {
    return this._powerSupply;
  }

  private _fcZs1Color = white;
  get fcZs1Color(): string {
    return this._fcZs1Color;
  }

  private _fcUpColor = white;
  get fcUpColor(): string {
    return this._fcUpColor;
  }

  private _fcDownColor = white;
  get fcDownColor(): string {
    return this._fcDownColor;
  }

  private _fs1Counter = '';
  get fs1Counter(): string {
    return this._fs1Counter;
  }

  private _tankLoColor = white;
  get tankLoColor(): string {
    return this._tankLoColor;
  }

  private _pumpCounter = '';
  get pumpCounter(): string {
    return this._pumpCounter;
  }

  private _tankColor = white;
  get tankColor(): string {
    return this._tankColor;
  }

  private updateData(status?: Partial<HyrecStatus>): void {
    status = status || {};
    this._idPiezo = status.idPiezo || '';
    this._idInstrument = status.idInstrument || '';
    this._ev1Color = toggleStatus(status.ev1Status);
    this._ev2Color = toggleStatus(status.ev2Status);
    this._arrowUpColor = toggleStatus(status.arrowUpStatus);
    this._arrowDownColor = toggleStatus(status.arrowDownStatus);
    this._tf3Position = formatLevel(status.tf3Position);
    this._h2oLevel = formatLevel(status.h2oLevel);
    this._machineryEmunted = formatVolume(status.machineryEmunted);
    this._piezoEmunted = formatVolume(status.piezoEmunted);
    this._mediumFlow = formatMediumFlow(status.mediumFlow);
    this._dailyFlow = formatDailyFlow(status.dailyFlow);
    this._batteryLevel = formatPercentage(status.batteryLevel);
    this._powerSupply = status.powerSupply;
    this._fcZs1Color = indicatorStatus(status.fcZs1);
    this._fcUpColor = indicatorStatus(status.fcUp);
    this._fcDownColor = indicatorStatus(status.fcDown);
    this._fs1Counter = formatCounter(status.fs1Counter);
    this._tankLoColor = indicatorStatus(status.tankLoStatus);
    this._pumpCounter = formatCounter(status.pumpCounter);
    this._tankColor = toggleStatus(status.tankStatus);
  }
}
