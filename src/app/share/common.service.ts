import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { delay, map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class CommonService {
  group$: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor(private http: HttpClient) {}

  initGroup(): Observable<any> {
    return of(Math.random()).pipe(delay(2000));
  }

  callApi(apiUrl: string, bodyRequest: any): Observable<any> {
    return this.http
      .post<any>(apiUrl, bodyRequest, { observe: "response" })
      .pipe(map((res) => res.body));
  }
}
