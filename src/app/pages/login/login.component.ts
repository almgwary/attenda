import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model: User = new User();
  constructor( private route: Router, private sharedData: SharedDataService) { }

  ngOnInit() {
  }

  submit() {
    console.log('LoginComponent.submit', this.model);
    this.sharedData.user.next(this.model);
    this.route.navigate(['/profile']);
  }

}
