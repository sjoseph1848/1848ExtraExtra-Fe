import { Component, OnInit } from '@angular/core';
import { CovidDataService } from 'src/app/data/covid-data.service';

@Component({
  selector: 'app-covid-dash',
  templateUrl: './covid-dash.component.html',
  styleUrls: ['./covid-dash.component.scss']
})
export class CovidDashComponent implements OnInit {
  county = 'Dallas';
  totalCases = 0;
  newHosp = 0;
  totalDeaths = 0;

  yesterdayCases = 0;
  yesterdayHosp = 0;
  yesterdayDeaths  = 0;

  casesPercentage;
  hospitalizationPercentage;
  deathPercentage;

  constructor(private covid: CovidDataService) { }

  ngOnInit() {
    const hospitalizations = this.covid.getDallasCovidHospitalizations('Dallas');
    hospitalizations.subscribe((data: any) => {
      this.newHosp = data[data.length - 1].hospitalizations;
      this.yesterdayHosp = data[data.length - 2].hospitalizations;
      this.hospitalizationPercentage = this.getPercentageChange(this.newHosp, this.yesterdayHosp);

    });

    const cases = this.covid.getCovidCases(this.county);
    cases.subscribe((data: any) => {
      this.totalCases = data[data.length - 1].cases;
      this.yesterdayCases = data[data.length - 2].cases;
      this.casesPercentage = this.getPercentageChange(this.totalCases, this.yesterdayCases);

    });

    const deaths = this.covid.getCovidDeaths(this.county);
    deaths.subscribe((data: any) => {
      this.totalDeaths = data[data.length - 1].deaths;
      this.yesterdayDeaths = data[data.length - 2].deaths;
      this.deathPercentage = this.getPercentageChange(this.totalDeaths, this.yesterdayDeaths);
    });
  }

  getPercentageChange(today: number, yesterday: number ) {
    const difference = (((today / yesterday ) * 100)  - 100);
    return difference;
  }

}
