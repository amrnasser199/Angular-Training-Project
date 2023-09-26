import { Component,ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
fullName="Ahmed ali";
Childtxt:any;
// viewchild here is to access child attributes and functions
@ViewChild(ChildComponent) child:ChildComponent=new ChildComponent;
//view child should be accessed after view  initiazliation
ngAfterViewInit()
{
console.log(this.child.showmessage());
}
}
