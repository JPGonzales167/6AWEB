import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyserviceService {
  serviceproperty = 'My service component';

  constructor() { }

  showTodayDate() {
    let ndate = new Date();
    return ndate;
  }
}
