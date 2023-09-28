import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { ProbertyBindingComponent } from './proberty-binding/proberty-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TemplateRefrenceVariableComponent } from './template-refrence-variable/template-refrence-variable.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIfStructureDirectiveComponent } from './Structure Directive/ng-if-structure-directive/ng-if-structure-directive.component';
import { NgswitchStructureDirectiveComponent } from './Structure Directive/ngswitch-structure-directive/ngswitch-structure-directive.component';
import { NgforStructureDirectiveComponent } from './Structure Directive/ngfor-structure-directive/ngfor-structure-directive.component';
import { PipesComponent } from './pipes/pipes.component';
import { SquarePipe } from './square.pipe';
import { ParentComponent } from './Component Interaction/parent/parent.component';
import { ChildComponent } from './Component Interaction/child/child.component';
import { EmployeeListComponent } from './Services/employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeesComponent } from './employees/employees.component';
import { DepartmentsComponent } from './departments/departments.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { OverviewComponent } from './Child Route Components/overview/overview.component';
import { ContactComponent } from './Child Route Components/contact/contact.component';
import { TdfComponent } from './tdf/tdf.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MatDialogExampleComponent } from './mat-dialog-example/mat-dialog-example.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MainComponent,
    InterpolationComponent,
    ProbertyBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    TemplateRefrenceVariableComponent,
    TwoWayBindingComponent,
    NgIfStructureDirectiveComponent,
    NgswitchStructureDirectiveComponent,
    NgforStructureDirectiveComponent,
    PipesComponent,
    SquarePipe,
    ParentComponent,
    ChildComponent,
    EmployeeListComponent,
    EmployeesComponent,
    DepartmentsComponent,
    NotFoundComponent,
    DepartmentDetailsComponent,
    OverviewComponent,
    ContactComponent,
    TdfComponent,
    ReactiveFormsComponent,
    MatDialogExampleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
