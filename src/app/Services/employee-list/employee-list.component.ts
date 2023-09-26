import { Component } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {
constructor(private emplyeeservice:EmployeeServiceService)
{

}
employeelist:any;
errormsg:any;
ngOnInit():void
 {
this.emplyeeservice.returnemployees().subscribe(

  data=>this.employeelist=data,
  error=>
  {
    this.errormsg=error;
  }

);
 }
}
