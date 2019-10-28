import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  private base_url = "https://pure-bayou-75309.herokuapp.com";
  // private base_url = "http://127.0.0.1:5000";

  constructor(private http: HttpClient) {}

  getsourcepool() {
    return this.http.get<any>(this.base_url + "/source_pool");
  }

  getfeedback() {
    return this.http.get<any>(this.base_url + "/feedback");
  }

  getrankinglist() {
    return this.http.get<any>(this.base_url + "/ranking_list");
  }

  check(data) {
    return this.http.post<any>(this.base_url + "/check", data);
  }

  feedback(data) {
    return this.http.post<any>(this.base_url + "/feedback", data);
  }
}
