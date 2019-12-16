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
}
