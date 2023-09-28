import { Component,OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { startWith,map } from 'rxjs/operators';
import { MatDialogExampleComponent } from './mat-dialog-example/mat-dialog-example.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private snackBar:MatSnackBar,private Dialog:MatDialog)
  {

  }
  title = 'projectfromzerotohero2';
  notification=20;
  showSpinner=false;
  ShowspinnerMethod()
  {
    this.showSpinner=true;
    setTimeout(() => {
      this.showSpinner=false;
    }, 5000);
  }

  opened:boolean=false;
  showNavData(data:any)
  {
    console.log(data);
  }

  DefineCurrentTab(selectedIndex:any)
  {
    console.log(selectedIndex);
  }
  SelectedValue:string="";
  selectedobjects:any=[
    {name:"Angular"},
    {name:"React"},
    {name:"VueJs"}
  ]
  displayfun(select:any)
  {
    return select?select.name:undefined;
  }
  options=["Angular","React","VUEJs"]
  filteredoptions:Observable<string[]>=new Observable<string[]>;
  formcontrl=new FormControl()
  ngOnInit(): void {
    this.filteredoptions=this.formcontrl.valueChanges.pipe(
      startWith(''),
      map((value)=>this.filterfunc(value))
    );
  }
  private filterfunc(value:any):string[]
  {
const lowervalue=value.toLowerCase();
return this.options.filter(Option=>Option.toLowerCase().includes(lowervalue));
  }

  radiovalue:string='';

  minDate=new Date();
  maxDate=new Date(2023,8,30);
filterDate(date:any)
{
  const Day=date? date.getDay():undefined;
  return Day!=0 &&Day!=6;
}
openSnackbar(message:any,action:any)
{
  this.snackBar.open(message,action,{duration:2000});
}
OpenDialog()
{
this.Dialog.open(MatDialogExampleComponent,{data:{name:"Amr Nasser"}}).afterClosed().subscribe((result)=>
{
  console.log(`Dialog Result : ${result}`);
})
}


}
