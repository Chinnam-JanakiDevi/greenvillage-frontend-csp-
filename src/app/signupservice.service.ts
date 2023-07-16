import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InsertedSuccess, UniqueConstraintError, Signupinterface, Read, sellplant, interface1 } from './signupinterface';


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

 
  Insert1(
    Details: sellplant
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'sellplant/Insert',
      Details,
      { headers: this.headers }
    );
  }
  Insert2(
    Details: interface1
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'contactus/Insert',
      Details,
      { headers: this.headers }
    );

  }
  Read(email: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}login/Read${email}`);
  }
  Read1(p_id: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}sellplant/Read${p_id}`);
  }
  Update(p_id:String, Details:sellplant) {
    return this.http.put(`${this.url}sellplant/Update${p_id}`, Details, {
      headers: this.headers,
    });
  }
  Delete(p_id: String): Observable<InsertedSuccess> {
    console.log(`${this.url}sellplant/Delete${p_id}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}sellplant/Delete${p_id}`
    );
  }
  Read2(season:string):Observable<Read>{  
    return this.http.get<Read>(`${this.url}example/Read${season}`);
  }
  Read3(plant_name: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}info/Read${plant_name}`);
  }
}
