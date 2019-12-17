import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import {ProfilComponent} from './pages/profil/profil.component';
import {ProfileRoutingModule} from './profile-routing.module';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserReportChartComponent } from './components/user-report-chart/user-report-chart.component';
import { LogoutComponent } from './components/logout/logout.component';



@NgModule({
  declarations: [
    ProfilComponent,
    UserInfoComponent,
    UserReportChartComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
