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

  model: User = new User();
  isLoading = false;
  error: string;
  constructor(
    private route: Router,
    private sharedData: SharedDataService,
    private api: ApiService) { }

  ngOnInit() {
  }

  submit() {
    this.isLoading = true;
    this.error = null;

    this.api.login(this.model.id)
    .subscribe(
      (data: User) => {
        this.isLoading = false;
        this.sharedData.user.next(data);
        this.route.navigate(['/profile']);
      }, error => {
        console.error(error);
        this.isLoading = false;
        this.error = 'problem with your login data 😘';
      }
    );


  }

}
