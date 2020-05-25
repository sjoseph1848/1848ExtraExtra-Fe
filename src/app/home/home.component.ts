import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  mainStoryTitle = 'How to track your stimulus check now with the IRS Get My Payment app';
  // tslint:disable-next-line: max-line-length
  mainStorySubTitle = 'If you\'re still looking for your stimulus payment, we\'ll explain how to use the IRS tracking app to check its schedule status.';
  // tslint:disable-next-line: max-line-length
  mainStoryLink = 'https://www.cnet.com/personal-finance/how-to-track-your-stimulus-check-now-with-the-irs-get-my-payment-app/';

  constructor() { }

  ngOnInit() {
  }

}
