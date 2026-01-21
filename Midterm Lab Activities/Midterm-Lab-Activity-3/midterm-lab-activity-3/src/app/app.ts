import { Component } from '@angular/core';
import { MyserviceService } from './myservice';
import { NewCmp } from './new-cmp/new-cmp';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NewCmp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  todaydate: Date;
  componentproperty: string;

  constructor(private myservice: MyserviceService) {
    this.todaydate = this.myservice.showTodayDate();
    this.componentproperty = this.myservice.serviceproperty;
  }
}
