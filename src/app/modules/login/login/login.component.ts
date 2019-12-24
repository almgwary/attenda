import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/modules/shared/models/user';
import { SharedDataService } from 'src/app/modules/shared/services/shared-data.service';
import { ApiService } from 'src/app/modules/shared/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userId;
  isLoading = false;
  error: string;
  numbers=[...Array(100).keys()]
  constructor(
    private route: Router,
    private sharedData: SharedDataService,
    private api: ApiService) { }

  ngOnInit() {
    console.log(('login page'));
  }

  submit(userId) {
    this.isLoading = true;
    this.error = null;
    console.log(userId);
    this.api.login(userId)
    .subscribe(
      (data: string) => {

        console.log(userId);

        this.isLoading = false;
        this.sharedData.userId.next(userId);
        this.route.navigate(['/upload']);
      }, error => {
        console.error(error);
        this.isLoading = false;
        this.error = 'problem with your login data 😘';
      }
    );


  }

}
