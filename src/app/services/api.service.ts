import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  login(userId) {
    return new Observable((observer) => {

      const data: User = new User(userId, 'amr ibrahim', 'https://avatars2.githubusercontent.com/u/7817756?s=400&v=4');

      setTimeout(() => {
        observer.next(data);
      }, 500);


      // setTimeout(() => {
      //   observer.error(data);
      // }, 500);

    });

  }


  getProfileData(userId) {
    return new Observable((observer) => {

      const data: any = {  
        days : ['sa', 'su', 'mo', 'tu', 'we', 'th', 'fr'],
        working: [65, 59, 80, 81, 56, 55, 40],
        breaking: [28, 48, 40, 19, 86, 27, 90]
      } ;

      setTimeout(() => {
        observer.next(data);
      }, 500);



    });

  }
}
