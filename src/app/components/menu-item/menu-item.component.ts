import {Component, computed, Input, signal, SimpleChanges} from '@angular/core';
import { StatusColorMap, StatusIconMap, MachineStatus } from '../../models/machine-status';
import { ComponentsModule } from '../components.module';

@Component({
  selector: 'app-menu-item',
  imports: [
    ComponentsModule
  ],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss'
})
export class MenuItemComponent {
  @Input() name!: string;
  @Input() status!: MachineStatus;

  statusSignal = signal<MachineStatus>(this.status);
  statusColor = computed(() => StatusColorMap[this.statusSignal()]);
  statusIcon = computed(() => StatusIconMap[this.statusSignal()]);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['status']) {
      this.statusSignal.set(this.status);
    }
  }
}
