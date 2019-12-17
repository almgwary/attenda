import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import {ProfilComponent} from './pages/profil/profil.component';
import {ProfileRoutingModule} from './profile-routing.module';



@NgModule({
  declarations: [
    ProfilComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
