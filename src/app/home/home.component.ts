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
  mainStoryImg = 'https://cnet3.cbsistatic.com/img/jAtXFV989_BT20FvXJ697AcGA00=/756x567/2020/04/15/5824396a-afee-430a-8250-3807ec44eab0/money-bills-wallet-coins-dollars-2.jpg';
  mainStoryLink = 'https://www.cnet.com/personal-finance/how-to-track-your-stimulus-check-now-with-the-irs-get-my-payment-app/';

  constructor() { }

  ngOnInit() {
  }

}
