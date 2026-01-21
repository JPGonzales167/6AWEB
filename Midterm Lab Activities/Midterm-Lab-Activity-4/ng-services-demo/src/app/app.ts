import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from './employee';

interface IEmployee {
  productid: string;
  productname: string;
  description: string;
  price: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  title = 'ng-services-demo';
  employees: IEmployee[] = [];

  constructor(private _employeeService: Employee) {}

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
  }
}
