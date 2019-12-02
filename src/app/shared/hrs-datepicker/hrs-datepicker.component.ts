import { Component, Input, forwardRef, HostBinding } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'hrs-datepicker',
  templateUrl: './hrs-datepicker.component.html',
  styleUrls: ['./hrs-datepicker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => HrsDatepickerComponent),
      multi: true
    }
  ]
})
export class HrsDatepickerComponent implements ControlValueAccessor {
  @HostBinding('attr.id')
  externalId = '';

  model: any;
  @Input()
  set id(value: string) {
    this._ID = value;
    this.externalId = null;
  }

  get id() {
    return this._ID;
  }

  private _ID = '';

  // tslint:disable-next-line: no-input-rename
  @Input('value') v = new Date();
  onChange: any = () => {};
  onTouched: any = () => {};

  get value() {
    return this.v;
  }

  set value(val) {
    this.v = val;
    this.onChange(val);
    this.onTouched();
  }

  constructor() {}

  registerOnChange(fn) {
    this.onChange = fn;
  }

  writeValue(value) {
    if (value) {
      this.value = value;
      this.model = { day: value.getUTCDay(), month: value.getUTCMonth(), year: value.getUTCFullYear()};
    }
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  onDateSelect(dateObj) {

    this.model = dateObj;
    this.value = new Date(dateObj.year, dateObj.month - 1, dateObj.day);
  }
}
