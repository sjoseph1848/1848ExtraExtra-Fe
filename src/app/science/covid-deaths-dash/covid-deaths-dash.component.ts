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
  selector: 'app-covid-deaths-dash',
  templateUrl: './covid-deaths-dash.component.html',
  styleUrls: ['./covid-deaths-dash.component.scss'],

})
export class CovidDeathsDashComponent implements OnInit {
  county = 'Dallas';
  public options: any = {
    chart: {
      type: 'spline'
    },
    title: {
      text: `${this.county} Covid-19 Deaths Over Time`
    },
    xAxis: {
      categories:[]
      },
    yAxis: {
      title: {
        text: "Deaths"
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
  constructor(private covid: CovidDataService){ }

  ngOnInit() {
    const county = this.covid.getCovidDeaths(this.county);
    county.subscribe((data: any) => {
      this.options.xAxis.categories = data.map(dat => dat.date);
      this.options.series[0]['data'] = data.map(dat => dat.deaths);
      Highcharts.chart('deaths', this.options);
    });
  }

}
