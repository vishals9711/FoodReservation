import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class APIBackendService {

  public url = "http://127.0.0.1:3800";

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  constructor(public http: HttpClient) { }

  public getAllCustomers(): Observable<any> {
    return this.http.get(this.url + '/customers').pipe(
      map(this.extractData));
  }

  public getCustomerDetailsById(passed_id): Observable<any> {
    return this.http.get(this.url + '/customers'+ passed_id).pipe(
      map(this.extractData));
  }

}
