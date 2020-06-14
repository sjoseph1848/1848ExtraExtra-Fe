import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidDataService {

  constructor(private http: HttpClient) {}

  getDallasCovidHospitalizations(county: string) {
    let url = `https://1848extra.azurewebsites.net/api/CovidHospitalizations/hospitalizations/${county}`;
    return this.http.get(url);
  }



}
