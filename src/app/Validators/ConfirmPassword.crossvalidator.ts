import { AbstractControl } from "@angular/forms";

export function Confrimpasswordvalidatior(form:AbstractControl)
{
  const password=form.get('password');
  const confrimpassword=form.get('confirmpassword');
  if(password?.pristine||confrimpassword?.pristine)
  return null;
return password&&confrimpassword&&password.value!=confrimpassword.value?{"misMatch":{value:true}}:null;
}
