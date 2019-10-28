import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  data = {
    name: null,
    email: null,
    subject: null,
    comment: null
  }
  loading: boolean = false;
  alert: boolean = false;
  success: boolean = false;
  res: any;

  constructor(private api: ApiService) { }

  ngOnInit() {
  }


  submit() {
    if (this.data.name && this.data.email && this.data.subject && this.data.comment) {
      this.alert = false;
      this.loading = true;
      this.api.feedback(this.data).subscribe(
        res => {
          this.res = res.response
          this.loading = false;
          this.clear()
          this.success = true;
          console.log(this.res)
        },
        err => {
          console.log(err);
        }
      );
    } else {
      this.success = false;
      this.alert = true;
    }
  }

  clear() {
    this.alert = false;
    this.data.name = null;
    this.data.email = null;
    this.data.subject = null;
    this.data.comment = null;
  }

  dismiss() {
    this.alert = false;
  }
}
