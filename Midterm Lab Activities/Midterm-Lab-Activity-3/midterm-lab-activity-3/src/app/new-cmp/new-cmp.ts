import { Component } from '@angular/core';
import { MyserviceService } from '../myservice';

@Component({
  selector: 'app-new-cmp',
  standalone: true,
  imports: [],
  templateUrl: './new-cmp.html',
  styleUrl: './new-cmp.css',
})
export class NewCmp {
  todaydate: Date;
  newcomponent = 'Entered in new component';
  componentproperty: string;

  constructor(private myservice: MyserviceService) {
    this.todaydate = this.myservice.showTodayDate();
    this.myservice.serviceproperty = 'Component Created';
    this.componentproperty = this.myservice.serviceproperty;
  }
}
