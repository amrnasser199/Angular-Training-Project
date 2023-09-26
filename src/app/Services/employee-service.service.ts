import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { employeeinterface } from './employeeinterface';
import { Observable,catchError,throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http :HttpClient) { }
    _url:string="assets/Data/Employee.json";
    errormsg:string="";
  returnemployees() :Observable<employeeinterface[]>
  {
    return this.http.get<employeeinterface[]>(this._url).pipe(catchError((err)=>

      throwError(()=> this.errormsg=err.message )
    ));

    //post http should send 2 parameters (url,Object which yoi will send)
    // this.http.post(this._url,)
  }
}
