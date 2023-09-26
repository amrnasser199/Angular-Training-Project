import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent {
  constructor(private Router:Router,private activatedRouter:ActivatedRoute)
  {}
departments:any=[
  {"id":1,"name":"Angular"},
  {"id":2,"name":"NodeJs"},
  {"id":3,"name":"React"},
  {"id":4,"name":"VueJs"},

]
deptId:any;
ngOnInit():void
{
this.activatedRouter.paramMap.subscribe((param:ParamMap)=>
this.deptId=param.get("id")
);
}
sendDeptid(dept:any)
{
this.Router.navigate(["/Department",dept.id]);
}
CheckPrevDeptIdwithCurrent(PrevId:any)
{
return parseInt(this.deptId)===parseInt(PrevId.id);
}
}
