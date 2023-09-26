import { AbstractControl } from "@angular/forms"
export function  forbiddenNameValidator(regexp:RegExp)
{
return (form:AbstractControl)=>
{
 var forbidden=regexp.test(form.value);
 return forbidden==true? {"forbiddenName":{value:form.value}} :null;
};
}
