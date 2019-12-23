import {Component, OnDestroy, OnInit} from '@angular/core';
import { User } from 'src/app/modules/shared/models/user';
import { SharedDataService } from 'src/app/modules/shared/services/shared-data.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import {Color, Label} from 'ng2-charts';
import { ApiService } from 'src/app/modules/shared/services/api.service';
import {Observable, Subject} from "rxjs";
import {Subscription} from "rxjs/src/internal/Subscription";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit, OnDestroy {

  userId: string ;
  user: any ;
  barChartLabels: Label[] = [];
  barChartColors: Color[] = [
    { backgroundColor: '#f44336' },
    { backgroundColor: '#4CAF50' },
  ];
  barChartData: ChartDataSets[] = [ ];
  isLoading =  false;
  sub: Subscription[] = [];
  constructor(private sharedData: SharedDataService, private api: ApiService) { }

  ngOnInit() {
    const sub: any = this.sharedData.userId.subscribe(
      userId => {
        this.userId = userId;
        if ( userId ) {
          this.loadProfileData();
        }
      }
    );
    this.sub.push(sub)
    this.userId = this.sharedData.userId.getValue();
    this.loadProfileData();
  }

  ngOnDestroy() {
    this.sub.forEach(sub => sub.unsubscribe());
  }

  logout() {
    this.sharedData.logout();
  }

  loadProfileData() {
    this.isLoading = true;
    this.api.getProfileData(this.userId)
    .subscribe(
      (user: any ) => {
        this.isLoading = false;

        const {days , working, breaking } = user.chartData;
        this.user = user;
        this.barChartLabels = days;
        this.barChartData = [
          {label: 'breaking ☕', data: breaking },
          {label: 'working 👨‍💻', data: working},
        ];
      }
    );
  }

}
