import { ValidatorFn, AbstractControl } from '@angular/forms';

export function emailFormatValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
   // const forbidden = nameRe.test(control.value);
    // return forbidden ? {'forbiddenName': {value: control.value}} : null;

    if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
      return null;
    } else {
      return { invalidEmailAddress: true };
    }
  };
}
