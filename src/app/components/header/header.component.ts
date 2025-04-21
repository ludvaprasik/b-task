import { Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { ComponentsModule } from '../components.module';
import {DateTimeComponent} from '../date-time/date-time.component';

@Component({
  selector: 'app-header',
  imports: [
    NavigationComponent,
    ComponentsModule,
    DateTimeComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
