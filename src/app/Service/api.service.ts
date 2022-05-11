import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  url = "https://reqres.in/api/users?page=2";

  public getuser(): Observable<any> {
    return this.http.get(`${this.url}`);
  }

  deleteurl = "https://reqres.in/api/users/";

  public deleteuser(id: any): Observable<any> {
    return this.http.delete(`${this.deleteurl}/${id}`);
  }


}
