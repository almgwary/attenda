import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  user: BehaviorSubject<User> = new BehaviorSubject<User>(this.getIntialUser());

  constructor() { }

  getIntialUser(): User {
    return new User();
  }
}
