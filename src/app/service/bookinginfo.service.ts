import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookinginfoService {
  public orderData: any;
  public currOrder: any;

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
  public getOrder(passed_id): Observable<any> {

    return this.http.get(this.url + '/order/' + passed_id).pipe(
      map(this.extractData));
  }


  public getAllOrder(passed_id): Observable<any> {

    return this.http.get(this.url + '/orders/' + passed_id).pipe(
      map(this.extractData));
  }

  public setOrderData(orderobj) {
    this.orderData = orderobj;
  }
  public getOrderData() {
    return this.orderData;
  }
  public setCurrOrder(orderobj) {
    this.currOrder = orderobj;
  }
  public getCurrOrder() {
    return this.orderData;
  }


}