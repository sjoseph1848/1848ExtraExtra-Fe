import { Component, OnInit } from '@angular/core';
import { NewsDataService } from '../../data/news-data.service';
import {ElectionDataService } from '../../data/election-data.service';
@Component({
  selector: 'app-politics-home',
  templateUrl: './politics-home.component.html',
  styleUrls: ['./politics-home.component.scss']
})
export class PoliticsHomeComponent implements OnInit {
  mainStoryTitle = 'How to track your stimulus check now with the IRS Get My Payment app';
  // tslint:disable-next-line: max-line-length
  mainStorySubTitle = 'If you\'re still looking for your stimulus payment, we\'ll explain how to use the IRS tracking app to check its schedule status.';
  // tslint:disable-next-line: max-line-length
  mainStoryLink = 'https://www.cnet.com/personal-finance/how-to-track-your-stimulus-check-now-with-the-irs-get-my-payment-app/';

  otherNews = [];
  pollsNational = [];
  constructor(private newsDataService: NewsDataService,
              private electionDataService: ElectionDataService) { }

  ngOnInit() {
    const topStory = this.newsDataService.getNewsByCategory('business');
    topStory.subscribe((data: any) => {
      this.mainStoryTitle = data.articles[1].title;
      this.mainStorySubTitle = data.articles[1].description;
      this.mainStoryLink = data.articles[1].url;
      this.otherNews = data.articles;
    });

    const polls = this.electionDataService.getNationalPolls();
    polls.subscribe((data: any) => {
      this.pollsNational = data.slice(0, 10);
    });

  }

}
