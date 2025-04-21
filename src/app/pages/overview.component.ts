import {Component, Signal} from '@angular/core';
import { NgForOf } from '@angular/common';
import { MachineStatusService } from '../services/machines-status.service';
import { MachineItemComponent } from '../components/machine-item/machine-item.component';
import { Machine } from '../models/machine-status';

@Component({
  selector: 'app-overview',
  imports: [
    MachineItemComponent,
    NgForOf
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {
  constructor(private statusService: MachineStatusService) {}

  get machines(): Signal<Machine[]> {
    return this.statusService.machines;
  }
}
