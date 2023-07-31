import { AbstractControl, FormControlName, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidators {
  // AbstractControl : from-control && form-group inherite from it 


  //setErrors() Manually set the errors for a control > params emitEvent: When true or not supplied 
  // (the default), the statusChanges observable emits an event after the errors are set.
  public static isMatch(firstControlName: string, secondControlName: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const firstControl = control.get(firstControlName);
      const secondControl = control.get(secondControlName);
      if (secondControl!.value && secondControl!.value !== firstControl!.value) {
        secondControl!.setErrors({ isMatch: true });
      }
      return null;
    };
  };

  public static isVaildMilitary(firstControlName: string, secondControlName: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const gender = control.get(firstControlName);
      const MilitaryStatus = control.get(secondControlName);

      if (gender!.value == 'male' && MilitaryStatus!.value == null)
        MilitaryStatus?.setErrors({ isVaildMilitary: true });

      return null;
    };
  };





  static patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        // if control is empty return no error
        return null!;
      }
  
      // test the value of the control against the regexp supplied
      const valid = regex.test(control.value);
  
      // if true, return no error (no error), else return error passed in the second parameter
      return valid ? null! : error;
    };
  }
}