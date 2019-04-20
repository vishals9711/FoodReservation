import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RestaurantreviewsService {

  public url = "http://127.0.0.1:3800";

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  constructor(public http: HttpClient) { }

 
  public getAllReviewsByRId(passed_id): Observable<any> {
    return this.http.get(this.url + '/getSetReview/' + passed_id).pipe(
      map(this.extractData));
  }
}
