import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Injectable()
export class ReactiveFormService {
  public markFormGroupTouched(formGroup: FormGroup): any {
    (<any>Object).values(formGroup.controls).forEach((control: any) => {
      control.markAsTouched();
      control.updateValueAndValidity({ onlySelf: false, emitEvent: true });
      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }

  public markFormArrayTouched(formGroup: FormArray): any {
    (<any>Object).values(formGroup.controls).forEach((control: any) => {
      control.updateValueAndValidity({ onlySelf: false, emitEvent: true });
      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }


  public markFormAsEnabled(formGroup: FormGroup | FormArray ): any {
    (<any>Object).values(formGroup.controls).forEach((control: any) => {
      control.enable();
      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }


  public markFormAsDisabled(formGroup: FormGroup | FormArray): any {
    (<any>Object).values(formGroup.controls).forEach((control: any) => {
      control.disable();
      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }

  /**
   * Marks all controls in a form group as touched
   * @param formGroup - The form group to touch
   */
  markFormGroupAsTouchedRefactor(formGroup: FormGroup): void {
    (<any>Object).values(formGroup.controls).forEach(control => {
      if (control instanceof FormControl && control.status !== 'VALID') {
        control.markAsTouched();
      }
      if (control.controls) {
        this.markFormGroupAsTouchedRefactor(control);
      }
    });
  }
}
