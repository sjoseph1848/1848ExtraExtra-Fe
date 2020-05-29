import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class NewsDataService {
  constructor(private http: HttpClient) { }

  getNewsByCategory(category: string) {
    let url = `https://1848extra.azurewebsites.net/api/news/category/${category}`;
    return this.http.get(url);
  }
}
