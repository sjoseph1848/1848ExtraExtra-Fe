import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-showcard',
  templateUrl: './showcard.component.html',
  styleUrls: ['./showcard.component.scss']
})
export class ShowcardComponent implements OnInit {
  @Input() story;
  constructor() { }

  ngOnInit() {
  }

}
