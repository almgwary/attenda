import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  user: User = new User();
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [ ];

  isLoading =  false;

  constructor(private sharedData: SharedDataService, private api: ApiService) { }

  ngOnInit() {
    this.sharedData.user.subscribe(
      data => {
        this.user = data;
        this.loadProfileData();
      }
    );

    this.user = this.sharedData.user.getValue();
    this.loadProfileData();
  }

  logout() {
    this.sharedData.logout();
  }

  loadProfileData() {
    this.isLoading = true;
    this.api.getProfileData(this.user.id)
    .subscribe(
      (data: any ) => {
        this.isLoading = false;

        const {days , working, breaking } = data;
        this.barChartLabels = days;
        this.barChartData = [
          {label: 'working 👨‍💻', data: working},
          {label: 'breaking ☕', data: breaking },
        ]
      }
    )
  }

}
