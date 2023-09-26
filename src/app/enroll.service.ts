import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsermodeltdfformComponent } from './UsermodeltdfformComponent';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {

  constructor(private http:HttpClient) { }
  _url:string="http://localhost:5000/enroll";
  enroll(user:UsermodeltdfformComponent)
  {
return this.http.post(this._url,user);
  }
}
