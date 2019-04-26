import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookinginfoService {

  public url = "http://127.0.0.1:3800";

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  constructor(public http: HttpClient) { }

  public create_a_booking_session(data): Observable<any> {
    return this.http.post(this.url + '/bookinfo', data).pipe(
      map(this.extractData));
  }
  public create_a_session(data): Observable<any> {
    return this.http.post(this.url + '/booksess', data).pipe(
      map(this.extractData));
  }
  public createOrder(data): Observable<any> {
    return this.http.post(this.url + '/order', data).pipe(
      map(this.extractData));
  }

}