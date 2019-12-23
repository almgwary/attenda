import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import {ProfilComponent} from './pages/profil/profil.component';
import {ProfileRoutingModule} from './profile-routing.module';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserReportChartComponent } from './components/user-report-chart/user-report-chart.component';
import { LogoutComponent } from './components/logout/logout.component';
import {HttpClientModule} from "@angular/common/http";
import {AvatarModule} from "ngx-avatar";
import { WordsPipe } from './pipes/words.pipe';



@NgModule({
  declarations: [
    ProfilComponent,
    UserInfoComponent,
    UserReportChartComponent,
    LogoutComponent,
    WordsPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AvatarModule,
    SharedModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
