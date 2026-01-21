import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Employee {
  getEmployees() {
    return [
      {
        productid: 'P-101',
        productname: 'Logitech Mouse',
        description: '6 Button Mehcanical Mouse',
        price: '899.00'
      },
      {
        productid: 'P-102',
        productname: 'JBL BT Speaker',
        description: 'Waterproof Radio 360 Surround',
        price: '1,099.00'
      },
      {
        productid: 'P-103',
        productname: 'Mechanical Keyboard',
        description: 'Hotswapable RGB Backlit',
        price: '2,395.00'
      },
      {
        productid: 'P-104',
        productname: 'Oculus Meta',
        description: 'All in one Gaming Headset',
        price: '22,450.00'
      }
    ];
  }
}
