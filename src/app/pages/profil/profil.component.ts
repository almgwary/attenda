import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

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
  barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];


  constructor(private sharedData: SharedDataService) { }

  ngOnInit() {
    this.sharedData.user.subscribe(
      data => {
        this.user = data;
      }
    );

    this.user = this.sharedData.user.getValue();
  }

  logout() {
    this.sharedData.logout();
  }

}
