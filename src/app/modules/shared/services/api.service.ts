import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { User } from '../models/user';
import {SharedDataService} from "./shared-data.service";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private sharedData: SharedDataService
  ) { }

  login(userId) {
    return new Observable((observer) => {

      setTimeout(() => {
        observer.next(userId);
      }, 500);

    });

  }

  timeTextToHours(text) {

    const hms = text ; //'02:04:33';   // your input string
    const a = hms.split(':'); // split it at the colons

     // minutes are worth 60 seconds. Hours are worth 60 minutes.
    const seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);

    return seconds / 60 / 60;
  }

  getProfileData(userId) {
    return new Observable((observer) => {

      const user = (this.sharedData.attendance.getValue() || {})[userId];
      if ( !user) {
        const message = `user ${this.sharedData.userId.getValue()} not found on this attendance, please login again`;
        console.log(message)
        alert(message);
        this.sharedData.logout();
        return ;
      }

      const days = [];
      const working = [];
      const breaking = [];
      if( user.attendance) {
        user.attendance.forEach(row => {
          const { date, start, end, netHours, totalOut, totalHours,
            totalWorkingAndBreak, variance } =  row ;
          days.push(date);
          working.push(this.timeTextToHours(netHours));
          breaking.push(this.timeTextToHours(totalOut));
        });
      }

      const data: any = {
        days,
        working,
        breaking
      } ;
      user.chartData = data;


      // const data: any = {
      //   days : ['sa', 'su', 'mo', 'tu', 'we', 'th', 'fr'],
      //   working: [65, 59, 80, 81, 56, 55, 40],
      //   breaking: [28, 48, 40, 19, 86, 27, 90]
      // } ;

      setTimeout(() => {
        observer.next(user);
      }, 300);



    });

  }
}
