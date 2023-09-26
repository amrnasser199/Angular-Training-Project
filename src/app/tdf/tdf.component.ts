import { Component } from '@angular/core';
import { UsermodeltdfformComponent } from '../UsermodeltdfformComponent';
import { EnrollService } from '../enroll.service';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.scss']
})
export class TdfComponent {
  constructor( private enrollservice:EnrollService){}
  topics:any=["Angular","React","VueJs"];

usermodel:any=new UsermodeltdfformComponent("","amr@gmail.com","","Angular","Morning",true);
submitData(form:any)
{
  console.log(form);
this.enrollservice.enroll(this.usermodel).subscribe(
  data=>
  {console.log(data,"success")},
  error=>{console.log(error)}
);


}
}
