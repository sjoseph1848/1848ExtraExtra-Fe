import { Component, OnInit } from '@angular/core';
import { NewsDataService } from '../../data/news-data.service';
@Component({
  selector: 'app-science-home',
  templateUrl: './science-home.component.html',
  styleUrls: ['./science-home.component.scss']
})
export class ScienceHomeComponent implements OnInit {
  mainStoryTitle = 'How to track your stimulus check now with the IRS Get My Payment app';
  // tslint:disable-next-line: max-line-length
  mainStorySubTitle = 'If you\'re still looking for your stimulus payment, we\'ll explain how to use the IRS tracking app to check its schedule status.';
  // tslint:disable-next-line: max-line-length
  mainStoryLink = 'https://www.cnet.com/personal-finance/how-to-track-your-stimulus-check-now-with-the-irs-get-my-payment-app/';

  otherNews = [];
  constructor(private newsDataService: NewsDataService) { }

  ngOnInit() {
    const topStory = this.newsDataService.getNewsByCategory('science');
    topStory.subscribe((data: any) => {
      this.mainStoryTitle = data.articles[1].title;
      this.mainStorySubTitle = data.articles[1].description;
      this.mainStoryLink = data.articles[1].url;
      this.otherNews = data.articles;
    });
  }
}
