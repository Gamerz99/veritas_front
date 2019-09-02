import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
  ranklist: any = null;
  loading: boolean = false;
  alert: boolean = false;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getrankinglist()
  }

  getrankinglist() {
    this.api.getrankinglist().subscribe(
      res => {
        this.ranklist = res.response;
      },
      err => {
        console.log(err);
      }
    );
  }
}
