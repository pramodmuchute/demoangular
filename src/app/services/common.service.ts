import { Injectable } from '@angular/core';
import { RequestOptions, Response, Http } from '@angular/http';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

@Injectable()
export class CommonService {

  constructor(
    private http: Http,
    private httpClient: HttpClient
  ) { }
  
  getAll(url){
    return this.http.get(url);
  }

  create(url, data, headers){
    // let testheaders = new Headers({ 
    //   //"Content-Type": "*",
    //   "Access-Control-Allow-Origin": "*",
    //   "Access-Control-Request-Headers": "*",
    //   "Access-Control-Allow-Methods": "GET, POST"
    // });
    // let options = new RequestOptions({ headers: headers });
    return this.http.post(url, JSON.stringify(data));
  }

  getItem(url, itemId){
    return this.http.get(url+'?id='+itemId);
  }

  update(url, itemId, data) {
    return this.http.post(url+'?id='+itemId, JSON.stringify(data));
  }

  delete(url, itemId) {
    return this.http.get(url+'?id='+itemId);
  }
}
