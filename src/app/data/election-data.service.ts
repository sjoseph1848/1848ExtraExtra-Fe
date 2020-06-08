import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ElectionDataService {

  constructor(private http: HttpClient) { }

    getNationalPolls() {
      let url = 'https://1848extra.azurewebsites.net/api/pres/elections/national';
      return this.http.get(url);
    }

}
