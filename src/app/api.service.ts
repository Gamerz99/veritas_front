import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private base_url = 'https://pure-bayou-75309.herokuapp.com';

  constructor(private http: HttpClient) { }

  getsourcepool() {
    return this.http.get<any>(this.base_url + '/source_pool');
  }

  check(data) {
    return this.http.post<any>(this.base_url + '/check', data);
  }

}
