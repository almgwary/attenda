import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {LoginComponent} from './login/login.component';
import {LoginRoutingModule} from './login-routing.module';
import { LoginWelcomeComponent } from './components/login-welcome/login-welcome.component';
import { LoginFormComponent } from './components/login-form/login-form.component';



@NgModule({
  declarations: [LoginComponent, LoginWelcomeComponent, LoginFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
