import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sourcepool: any = null;
  feedback: any = null;
  news: any = null;
  result: any = null;
  loading: boolean = false;
  alert: boolean = false;
  constructor(private api: ApiService) {

  }

  ngOnInit() {
    this.getsourcepool();
    this.getfeedback()
    console.log(Date())
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

  getfeedback() {
    this.api.getfeedback().subscribe(
      res => {
        this.feedback = res.response;
        console.log(this.feedback)
      },
      err => {
        console.log(err);
      }
    );
  }

  verify() {
    if (this.news) {
      this.alert = false;
      this.result = null;
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
    } else {
      this.alert = true;
    }

  }

  clear() {
    this.alert = false;
    this.news = null;
    this.result = null;
  }

  dismiss() {
    this.alert = false;
  }

}
