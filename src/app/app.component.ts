import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';

import { HyrecStatus } from './hyrec-status';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnDestroy, OnInit {
  readonly hyrecForm = this.fb.group<HyrecStatus>({
    idPiezo: '',
    idInstrument: '',
    arrowUpStatus: false,
    arrowDownStatus: false,
    ev1Status: false,
    ev2Status: false,
    tf3Position: 0,
    h2oLevel: 0,
    machineryEmunted: 0,
    piezoEmunted: 0,
    mediumFlow: 0,
    dailyFlow: 0,
    batteryLevel: 0,
    powerSupply: 'network',
    fcZs1: false,
    fcUp: false,
    fcDown: false,
    fs1Counter: 0,
    tankLoStatus: false,
    pumpCounter: 0,
    tankStatus: false,
    bulkUnload: true,
  });

  private formSub = Subscription.EMPTY;

  constructor(private fb: FormBuilder) {}

  ngOnDestroy(): void {
    this.formSub.unsubscribe();
  }

  ngOnInit(): void {}
}
