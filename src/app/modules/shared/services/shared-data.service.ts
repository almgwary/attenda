import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Subject, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';




const USER_LOCAL_STORAGE_KEY = 'USER';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  user: BehaviorSubject<User> = new BehaviorSubject<User>(this.getUserFromLocalStorage());

  constructor(private router: Router) {
    this.user.subscribe(
      user => {
        this.setUserInLocalStorage(user);
      }
    );
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

  setUserInLocalStorage(user: User) {
      localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(user));
  }

  getUserFromLocalStorage(): User {
    let user = null;
    try {
        const text = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
        if(text && text !== ''){
            const data = JSON.parse(text);
            user = data;
        }
    } catch (e) {
      console.error(e);
    }
    return user;
  }
}
