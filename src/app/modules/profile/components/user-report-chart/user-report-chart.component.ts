import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../shared/models/user';
import {Color, Label} from 'ng2-charts';
import {ChartDataSets, ChartType} from 'chart.js';

@Component({
  selector: 'app-user-report-chart',
  templateUrl: './user-report-chart.component.html',
  styleUrls: ['./user-report-chart.component.scss']
})
export class UserReportChartComponent implements OnInit {

  @Input() user: User = new User();
  @Input() isLoading =  false;
  @Input() barChartColors: Color[] = [];
  @Input() barChartLabels: Label[] = [];
  @Input() barChartData: ChartDataSets[] = [ ];

  barChartOptions: any = {
    responsive: true,
    scales: {
      xAxes: [{
        stacked: true,
        maxBarThickness: 20
      }],
      yAxes: [{
        stacked: true
      }],

    },
    legend: {
      display: true,
      position: 'top',
      labels: {
        fontColor: '#886ce4',
        fontFamily: 'Courier Prime',
        usePointStyle: true
      }
    },
  };
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];


  constructor() { }

  ngOnInit() {
  }

}
