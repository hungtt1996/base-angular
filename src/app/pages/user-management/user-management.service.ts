import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { CommonService } from "src/app/share/common.service";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class UserManagementService {
  apiUrl = environment.baseUrl;

  constructor(private http: HttpClient, private common: CommonService) {}

  getUsers(bodyEnq: any): Observable<any> {
    return this.common.callApi(this.apiUrl, bodyEnq);
    // return this.http
    //   .post<any>(this.apiUrl, bodyEnq, { observe: "response" })
    //   .pipe(map((res) => res.body));
  }

  createUser(bodyEnq: any): Observable<any> {
    return this.common.callApi(this.apiUrl, bodyEnq);
    // return this.http
    //   .post<any>(this.apiUrl, bodyEnq, { observe: "response" })
    //   .pipe(map((res) => res.body));
  }
}
