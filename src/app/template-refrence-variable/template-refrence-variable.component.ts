import { Component } from '@angular/core';

@Component({
  selector: 'app-template-refrence-variable',
  templateUrl: './template-refrence-variable.component.html',
  styleUrls: ['./template-refrence-variable.component.scss']
})
export class TemplateRefrenceVariableComponent {
  Print(txt:any)
  {
console.log("Welecome from button");
console.log(txt);
  }
}
