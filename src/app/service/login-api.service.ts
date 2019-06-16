import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { Events } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoginAPIService {

  public url = "http://127.0.0.1:3800";

  public userId = null;
  public email = null;
  public name = null;
  public isLoggedIn: boolean = false;

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  constructor(public http: HttpClient, public events: Events) { }

  public authenticateUser(data): Observable<any> {
    return this.http.post(this.url + '/authenticateUser', data).pipe(
      map(this.extractData));
  }

  public setUserData(userid, email, name) {
    this.userId = userid;
    this.email = email;
    this.name = name;
    this.isLoggedIn = true;
  }

  public getUserId() {
    return this.userId;
  }

  public getEmail() {
    return this.email;
  }

  public getName() {
    return this.name;
  }

  public getIsloggedIn() {
    return this.isLoggedIn;
  }

  public clearUserData() {
    this.userId = null;
    this.email = null;
    this.name = null;
    this.isLoggedIn = false;
  }

  public publishUser() {
    if (this.getIsloggedIn() == true) {
      this.events.publish('user:created');
    }
  }






}
