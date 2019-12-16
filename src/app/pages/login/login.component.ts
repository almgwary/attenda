import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model:any = {
    id: ''
  };
  constructor( private route: Router) { }

  ngOnInit() {
  }

  submit() {
    console.log('LoginComponent.submit', this.model);
    this.route.navigate(['/profile']);
  }

}
