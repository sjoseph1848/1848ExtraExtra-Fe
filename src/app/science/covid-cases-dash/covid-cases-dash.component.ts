import { Component, OnInit } from '@angular/core';
import { CovidDataService } from '../../data/covid-data.service';
import * as Highcharts from 'highcharts';

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

@Component({
  selector: 'app-covid-cases-dash',
  templateUrl: './covid-cases-dash.component.html',
  styleUrls: ['./covid-cases-dash.component.scss']
})
export class CovidCasesDashComponent implements OnInit {
  county = 'Dallas';
  public options: any = {
    chart: {
      type: 'spline'
    },
    title: {
      text: `${this.county} Covid-19 Cases Over Time`
    },
    xAxis: {
      categories:[]
      },
    yAxis: {
      title: {
        text: "Cases"
      }
    },
    series: [
      {
        name: this.county,
        turboThreshold: 500000,
        data: []
      }
    ]
  }

  constructor(private covid: CovidDataService) { }

  ngOnInit() {
    const county = this.covid.getCovidCases(this.county);
    county.subscribe((data: any) => {
      this.options.xAxis.categories = data.map(dat => dat.date);
      this.options.series[0]['data'] = data.map(dat => dat.cases);
      Highcharts.chart('cases', this.options);
    });
  }

}
