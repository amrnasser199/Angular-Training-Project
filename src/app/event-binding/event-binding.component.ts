import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent {
  message:string="Welcome";
printmsg(eventhands:any)
{
  console.log("Welcome To event");
  this.message="Welcome From Event Function";
  console.log(eventhands);
}
}
