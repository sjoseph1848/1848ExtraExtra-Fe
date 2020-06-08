import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-polls-table',
  templateUrl: './polls-table.component.html',
  styleUrls: ['./polls-table.component.scss']
})
export class PollsTableComponent implements OnInit {
  @Input() polls = [];
  constructor() { }

  ngOnInit() {
  }

}
