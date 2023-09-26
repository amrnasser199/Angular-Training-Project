import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { DepartmentsComponent } from './departments/departments.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { OverviewComponent } from './Child Route Components/overview/overview.component';
import { ContactComponent } from './Child Route Components/contact/contact.component';

const routes: Routes = [
  {path:"",redirectTo:"/Departments",pathMatch:"full"},
  {path:"empolyees",component:EmployeesComponent},
  {path:"Departments",component:DepartmentsComponent},


  {path:"Department/:id",
  component:DepartmentDetailsComponent,
  children:[
  {path:"overview",component:OverviewComponent},
  {path:"contact",component:ContactComponent},
]},

  {path:"**",component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
