import { Component, Input, forwardRef, HostBinding } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'hrs-textbox',
  templateUrl: './hrs-textbox.component.html',
  styleUrls: ['./hrs-textbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => HrsTextboxComponent),
      multi: true
    }
  ]
})
export class HrsTextboxComponent implements ControlValueAccessor {
  @Input() placeholder: string;
  @Input() type: string;
  @Input() isInValid: boolean;



  @HostBinding('attr.id')
  externalId = '';

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
  @Input('value') v = '';
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
    }
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }


  textinput(val) {
    console.log(val);
    this.value = val;
  }




}
