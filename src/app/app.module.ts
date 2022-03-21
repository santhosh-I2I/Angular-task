import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldsetComponent } from './fieldset/fieldset.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeFormComponent,
    FieldsetComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
