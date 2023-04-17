import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { HyrecStatus } from './hyrec-status';

const green = '#4caf50';
const red = '#f44336';
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

const formatLevel = (level?: number): string => {
  if (level == null) {
    return '';
  }
  return `${level} m`.replace('.', ',');
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

  private _ev1Color = transparent;
  get ev1Color(): string {
    return this._ev1Color;
  }

  private _ev2Color = transparent;
  get ev2Color(): string {
    return this._ev2Color;
  }

  private _arrowUpColor = transparent;
  get arrowUpColor(): string {
    return this._arrowUpColor;
  }

  private _arrowDownColor = transparent;
  get arrowDownColor(): string {
    return this._arrowDownColor;
  }

  private _tf3Position = '';
  get tf3Position(): string {
    return this._tf3Position;
  }

  private _h2oLevel = '';
  get h2oLevel(): string {
    return this._h2oLevel;
  }

  private updateData(status?: Partial<HyrecStatus>): void {
    status = status || {};
    this._ev1Color = toggleStatus(status.ev1Status);
    this._ev2Color = toggleStatus(status.ev2Status);
    this._arrowUpColor = toggleStatus(status.arrowUpStatus);
    this._arrowDownColor = toggleStatus(status.arrowDownStatus);
    this._tf3Position = formatLevel(status.tf3Position);
    this._h2oLevel = formatLevel(status.h2oLevel);
  }
}
