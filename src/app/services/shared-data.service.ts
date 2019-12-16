import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Subject, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  user: BehaviorSubject<User> = new BehaviorSubject<User>(this.getIntialUser());

  constructor(private router: Router) { }

  getIntialUser(): User {
    return new User();
  }

  isUserExist(): boolean {
    const user: User = this.user.getValue();
    const isUserExist = !!(user && user.id);
    return isUserExist;
  }


  logout() {
    this.user.next(new User());
    this.router.navigate(['/login']);
  }
}
