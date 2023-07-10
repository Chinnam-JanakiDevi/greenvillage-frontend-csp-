import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InsertedSuccess, UniqueConstraintError, Signupinterface, Read, sellplant } from './signupinterface';


@Injectable({
  providedIn: 'root'
})
export class SignupserviceService {

  constructor(private http: HttpClient) { }
  headers = new HttpHeaders({
    'content-type': 'application/json',
    Authentication: 'Bearer' + localStorage.getItem('token'),
  });
  private url = "http://localhost:4000/";

  Insert(Details: Signupinterface):
    Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'signup/Insert',
      Details,
      { headers: this.headers }
    );
  }

  Read(email: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}login/Read${email}`);
  }
  Insert1(
    Details: sellplant
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'sellplant/Insert',
      Details,
      { headers: this.headers }
    );
  }
}
