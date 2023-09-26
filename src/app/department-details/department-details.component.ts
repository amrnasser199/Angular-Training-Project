import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.scss']
})
export class DepartmentDetailsComponent {
constructor(private activatedroute:ActivatedRoute,private router:Router)
{}
deptId:any;
ngOnInit():void
{
  //this below line will get a wrong naviagate url don't use it use the uncommented line
// this.deptId=this.activatedroute.snapshot.paramMap.get("id");
this.activatedroute.paramMap.subscribe((params:ParamMap)=>
this.deptId=params.get("id")
);
}
send_Id_as_OptionalParameter_ToDepartments()
{
  this.router.navigate(["/Departments",{"id":this.deptId}]);
}
ShowOverView()
{
  //importamt note!!!!
  //Don't Put / before overview word it will not work
  this.router.navigate(["overview"],{relativeTo:this.activatedroute})
}
Showcontact()
{
    //importamt note!!!!
  //Don't Put / before contact word it will not work
  this.router.navigate(["contact"],{relativeTo:this.activatedroute})
}


}
