import { ValidatorFn, AbstractControl } from '@angular/forms';

export function mobileFormatValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.value || control.value.match(/^(\+\d{1,3}[- ]?)?\d{10}$/)) {
      return null;
    } else {
      return { invalidmobileNumber: true };
    }
  };
}
