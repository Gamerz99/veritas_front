import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sourcepool: any = null;
  news: any = null;
  result: any = null;
  loading: boolean = false;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getsourcepool();
  }

  getsourcepool() {
    this.api.getsourcepool().subscribe(
      res => {
        this.sourcepool = res.response;
      },
      err => {
        console.log(err);
      }
    );
  }

  verify() {
    this.loading = true;
    let content = {
      data: this.news
    }
    this.api.check(content).subscribe(
      res => {
        this.result = res.data;
        this.loading = false;
      },
      err => {
        console.log(err);
      }
    );

  }

}
