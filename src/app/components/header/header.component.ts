import { Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { ComponentsModule } from '../components.module';

@Component({
  selector: 'app-header',
  imports: [
    NavigationComponent,
    ComponentsModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
