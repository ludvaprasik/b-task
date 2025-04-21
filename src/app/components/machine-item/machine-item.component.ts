import {Component, computed, Input, signal, SimpleChanges} from '@angular/core';
import { StatusColorMap, StatusIconMap, MachineStatus } from '../../models/machine-status';
import { ComponentsModule } from '../components.module';

@Component({
  selector: 'app-machine-item',
  imports: [
    ComponentsModule
  ],
  templateUrl: './machine-item.component.html',
  styleUrl: './machine-item.component.scss'
})
export class MachineItemComponent {
  @Input() name!: string;
  @Input() status!: MachineStatus;
  @Input() icon!: string;

  statusSignal = signal<MachineStatus>(this.status);
  statusColor = computed(() => StatusColorMap[this.statusSignal()]);
  statusIcon = computed(() => StatusIconMap[this.statusSignal()]);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['status']) {
      this.statusSignal.set(this.status);
    }
  }
}
