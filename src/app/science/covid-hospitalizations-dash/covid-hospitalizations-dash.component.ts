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
  selector: 'app-covid-hospitalizations-dash',
  templateUrl: './covid-hospitalizations-dash.component.html',
  styleUrls: ['./covid-hospitalizations-dash.component.scss']
})
export class CovidHospitalizationsDashComponent implements OnInit {
  public options: any = {
    chart: {
      type: 'spline'
    },
    title: {
      text: 'Dallas Covid-19 Hospitalizations'
    },
    xAxis: {
      categories:[]
      },
    yAxis: {
      title: {
        text: "Patients"
      }
    },
    series: [
      {
        name: 'Dallas',
        turboThreshold: 500000,
        data: []
      }
    ]
  }
  constructor(private covid: CovidDataService) { }

  ngOnInit() {
    const dallas = this.covid.getDallasCovidHospitalizations('Dallas');
    dallas.subscribe((data: any) => {
      const test = data.map(dat => dat.date);
      this.options.xAxis.categories = data.map(dat => dat.date);
      this.options.series[0]['data'] = data.map(dat => dat.hospitalizations);
      Highcharts.chart('container', this.options);
    })


  }

}
