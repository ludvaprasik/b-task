import { Injectable, signal } from '@angular/core';
import { Machine, MachineStatus } from '../models/machine-status';

@Injectable({
  providedIn: 'root'
})
export class MachineStatusService {
  private machinesSignal = signal<Machine[]>([]);

  machines = this.machinesSignal.asReadonly();

  constructor() {
    fetch('machine-status.json')
      .then(res => res.json())
      .then((data: { machines: Machine[] }) => {
        this.machinesSignal.set(data.machines);
      });
  }
}

