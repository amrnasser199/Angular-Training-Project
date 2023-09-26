import { Component } from '@angular/core';
import { Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
// @Input() sendData:any;
@Input("sendData") fullnamefromparent:any;
@Output() sendeventtoparent=new EventEmitter();
sendDate()
{
  this.sendeventtoparent.emit("Hello from child component");
}
showmessage()
{
  console.log("Iam from child component");
}
}
