import { Component, OnInit, Input } from '@angular/core';
import { textboxScaleAnimation } from 'src/app/animations/textboxscale.animation';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'hrs-textbox',
  templateUrl: './hrs-textbox.component.html',
  styleUrls: ['./hrs-textbox.component.scss'],
  animations: [textboxScaleAnimation]
})
export class HrsTextboxComponent implements OnInit {
  @Input() placeholder: string;
  @Input() autocomplete = 'off';
  @Input() type: string;
  @Input() id: string;
  @Input() disableAnimation: boolean;
  @Input() form: FormGroup;
  @Input() helptext: string;
  @Input() validationMessage: string;

  textboxState = 'out';

  constructor() { }

  ngOnInit() {
    if (this.disableAnimation) {
      this.textboxState = '';
    }
  }

  focusFunction() {

    if (this.disableAnimation) {
      this.textboxState = '';
    } else {
    this.textboxState = 'in';
    }
  }

  focusOutFunction() {

    if (this.disableAnimation) {
      this.textboxState = '';
    } else {
    this.textboxState = 'out';
    }
  }
}
