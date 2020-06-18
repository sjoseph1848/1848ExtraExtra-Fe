import {Component, OnInit, OnDestroy, AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource } from '@angular/material';
import {ElectionDataService } from '../../data/election-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'Trump', 'Biden', 'Date of Poll'];
  pollDataSource: MatTableDataSource<NationalPoll> = new MatTableDataSource();

  pollsSubscription: Subscription;

  @ViewChild('pollPaginator', {static: false}) pollPaginator: MatPaginator;


  constructor(private electionDataService: ElectionDataService) { }

  ngOnInit() {
    this.pollsSubscription = this.electionDataService.getNationalPolls()
      .subscribe(polls => this.pollDataSource.data = polls);
    // const polls = this.electionDataService.getNationalPolls();
    // polls.subscribe((data: any) => {
    //   this.pollsNational = data.slice(0, 10);
    // });

  }

  ngAfterViewInit(): void {
    this.pollDataSource.paginator = this.pollPaginator;
  }

  ngOnDestroy(): void {
    this.pollsSubscription.unsubscribe();
  }

}

export interface NationalPoll {
  questionId: number;
  demCandidateName: string;
  repCandidateName: string;
  state: null;
  fteGrade: string;
  methodology: string;
  startDate: Date;
  endDate: Date;
  partisan?: string;
  rPct: number;
  dPct: number;
}

