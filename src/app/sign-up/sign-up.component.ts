import {FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './All-Validators';
import { MatDialog } from '@angular/material/dialog';
import { SubmitPromtComponent } from '../submit-promt-component/submit-promtcomponent';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'Reactive-Forms',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {
  genders = ['male', 'female'];
  MilitaryStatuss = ['Completed', 'Exempted', 'Postponed'];
  signupForm!: FormGroup;
  citiesArray = ['Cairo', 'Alexandria', 'Luxor', 'Lisbon', 'Porto', 'Coimbra', 'Salta', 'Rosario ', 'Mar del Plata']
  countryArray = ['Egypt', 'Portugal', 'Argentina'];
  selectedCountry!: string;
  // datePicker! : DatepickerMinMaxExample;
  currentYear = new Date().getFullYear();
  minDate = new Date(this.currentYear - 18, 0, 1);
  maxDate = new Date(this.currentYear + 37, 11, 31);

  user: any = {};

  constructor(public dialog  : MatDialog) {
  }

//pop up for deleting task
openDialog(): void {
  this.dialog.open(SubmitPromtComponent,{
    data:{
    form : this.signupForm
    }
  });
}

  ngOnInit() {
    this.signupForm = new FormGroup({

        'PersonalInfo': new FormGroup({
          'username': new FormControl('', [
            Validators.required,
            Validators.pattern("[a-zA-Z ]*"),
            Validators.minLength(3),
            Validators.maxLength(10),
            //  CustomValidators.cannotContainSpace
          ]),
          'email': new FormControl(null, [Validators.required, Validators.email]),
        }),

      'passwordGroup': new FormGroup({
        'password': new FormControl(null, 
          Validators.compose(  [
            Validators.required,
            CustomValidators.patternValidator(/\d/, { atLeastOneNumber: true }),
            CustomValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
              CustomValidators.patternValidator( /.{8,}/, {minLength : true}),          //   Validators.minLength(8), ??? 
              CustomValidators.patternValidator( /^.{1,20}$/, {maxLength : true}),        //    Validators.maxLength(20),  ???
              CustomValidators.patternValidator(/^[^\s]+$/, { containSpace: true }),
          ])
        ),
        'confirmation-password': new FormControl('', [Validators.required])
      }, {
        validators: [CustomValidators.isMatch('password', 'confirmation-password')]
      }),

      'hasMilitaryStatus': new FormGroup({
        'gender': new FormControl(null, [Validators.required]),
        'militaryStatus': new FormControl(null),
        'phone-number': new FormControl('', [Validators.pattern('[- +()0-9]+')]),
      }, {
        validators: [CustomValidators.isVaildMilitary('gender', 'militaryStatus')]
      }),
     

      'LivingPlace': new FormGroup({
        'country': new FormControl(),
        'citys': new FormControl({ value: null, disabled: true }, [Validators.required]),      // expressionProperties: 
        'datepicker': new FormControl({}, [Validators.required])    
      }, {
      }),
  
    });
  }

  // get all form controls  : section
  get userName() {
    return this.signupForm.get('PersonalInfo.username');
  }
  get Email() {
    return this.signupForm.get('PersonalInfo.email');
  }
  get Password() {
    return this.signupForm.get('passwordGroup.password');
  }
  get confirmationPassword() {
    return this.signupForm.get('passwordGroup.confirmation-password');
  }
  get phoneNumber() {
    return this.signupForm.get('hasMilitaryStatus.phone-number');
  }
  get Gender() {
    return this.signupForm.get('hasMilitaryStatus.gender');
  }
  get MilitarStatus() {
    return this.signupForm.get('hasMilitaryStatus.militaryStatus');
  }
  get Country() {
    return this.signupForm.get('LivingPlace.country');
  }

  get Citys() {
    return this.signupForm.get('LivingPlace.citys');
  }
  get DatePicker() {
    return this.signupForm.get('LivingPlace.datepicker');
  }

  // fuctions req in order to modifiy my datas
  notMilitarStatus(event: any) {
    if (event.value == 'female')
      this.MilitarStatus?.disable();

    else if (event.value == 'male')
      this.MilitarStatus?.enable();
  }
  reqCounty(selectedCountry: string) {
    if (selectedCountry == 'Default') {

      this.Citys?.patchValue(null);
      this.Citys?.removeValidators(Validators.required);
    }
    this.Citys?.enable();
    this.Citys?.setValidators(Validators.required);
  }
  
//updated
  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset();

  }





}

// this.user = Object.assign(this.user, this.signupForm.value);
// localStorage.setItem('Users', JSON.stringify(this.user)); thats the ts