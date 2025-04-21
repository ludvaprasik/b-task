import { Component, signal } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-date-time',
  imports: [
    DatePipe
  ],
  templateUrl: './date-time.component.html',
  styleUrl: './date-time.component.scss'
})
export class DateTimeComponent {
  now = signal(new Date());

  constructor() {
    setInterval(() => this.now.set(new Date()), 1000);
  }
}
