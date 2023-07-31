import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatSelectModule} from '@angular/material/select';
import { CitiesFilter } from './sign-up/cities-list.pipe';
import { SubmitPromtComponent } from './submit-promt-component/submit-promtcomponent';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    CitiesFilter,
    SubmitPromtComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
     ReactiveFormsModule,
     DropDownListModule,
     BrowserAnimationsModule,
     MatRadioModule,MatFormFieldModule,MatSelectModule,
     FormsModule ,MatDatepickerModule,MatDialogModule,MatNativeDateModule,MatInputModule],
     
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
