import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../Validators/forbiddenName.CustomValidator';
import { Confrimpasswordvalidatior } from '../Validators/ConfirmPassword.crossvalidator';
@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent {
  constructor(private formBuilder:FormBuilder)
  {

  }
// registerationForm=new FormGroup({
// username:new FormControl(''),
// password:new FormControl(''),
// confirmpassword:new FormControl(''),
// Addressgroup:new FormGroup({
//   city:new FormControl(''),
//   street:new FormControl(''),
//   postalcode:new FormControl(''),
// }),
// });

//فيه طريفة اسهل من انك تبنى الفورم كدا
//وهى formbuilder
registerationForm=this.formBuilder.group({
  //ممكن تعمل كدا
  // username:this.formBuilder.control(''),
  //بس الاسهل تعمل اللى جاى
  username:['',[Validators.required,Validators.minLength(4),forbiddenNameValidator(/super admin/)]],
  password:[''],
  confirmpassword:[''],
  email:[''],
  alternativEmail:this.formBuilder.array([]),
  subscribe:[false],
  Addressgroup:this.formBuilder.group({
    city:[''],
    street:[''],
    postalcode:[''],
  }),
  },{validators:[Confrimpasswordvalidatior]});
get UserName()
{
return this.registerationForm.get('username');
}
get email()
{
return this.registerationForm.get('email');
}

subscribeEmail()
{
  var check=this.registerationForm.get('subscribe')?.valueChanges.subscribe((checkvalue)=>{
if(checkvalue)
this.email?.setValidators(Validators.required);
else
this.email?.clearValidators();

this.email?.updateValueAndValidity();
  })
}
get alternativEmail()
{
return this.registerationForm.get('alternativEmail') as FormArray;
}
addAnotherEmail()
{
   this.alternativEmail.push(this.formBuilder.control(''));
}
submitData()
{
//   this.registerationForm.setValue(
//     {
//       username:"amr",
//       password:"123",
//       confirmpassword:"123",
//       Addressgroup:{
//         city:"cairo",
//         street:"geish",
//         postalcode:"11763"
//       }
//     }
//   );


//if you want not to set all form controls like remove password and confirm password values user patch value not setvalue
this.registerationForm.patchValue(
  {
    username:"amr",
    Addressgroup:{
      city:"cairo",
      street:"geish",
      postalcode:"11763"
    }
  }
);
}
}
