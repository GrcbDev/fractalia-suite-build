import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

function isEmptyInputValue(value: any) {
  return value == null || (typeof value === 'string' && value.length === 0);
}
const EMAIL_PATTERN = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export class ValidatorsExtends {

  static matchPassword: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    let pass = group.get('password')?.value;
    let confirmPass = group.get('confirmPassword')?.value;

    return pass === confirmPass ? null : { notSame: true };
  };



  static validateEmail(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (isEmptyInputValue(control.value)) {
        return null;
      }
      const regex = new RegExp(EMAIL_PATTERN);
      const value: string = control.value;
      return regex.test(value)  ? null : { emailError: 'it is not a valid email' };
    };
  }

  static validatePhone(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (isEmptyInputValue(control.value)) {
        return null;
      }
      const regex = new RegExp(/^[+]*[0-9]*$/g);
      const value: string = control.value;
      return regex.test(value)  ? null : { emailError: 'it is not a phone email' };
    };
  }
}
