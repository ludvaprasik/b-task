import {Component, Signal} from '@angular/core';
import { NgForOf } from '@angular/common';
import { MachineStatusService } from '../../services/machines-status.service';
import { Machine } from '../../models/machine-status';
import { MenuItemComponent } from '../menu-item/menu-item.component';

@Component({
  selector: 'app-navigation',
  imports: [
    MenuItemComponent,
    NgForOf
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  constructor(private statusService: MachineStatusService) {}

  get machines(): Signal<Machine[]> {
    return this.statusService.machines;
  }
}
