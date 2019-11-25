import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HrsTextboxComponent } from './hrs-textbox/hrs-textbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HrsWidgetComponent } from './hrs-widget/hrs-widget.component';
import { HrsFormGroupComponent } from './hrs-form-group/hrs-form-group.component';
import { HrsDatepickerComponent } from './hrs-datepicker/hrs-datepicker.component';
import { HrsValidationMessageComponent } from './hrs-validation-message/hrs-validation-message.component';
import { HrsButtonComponent } from './hrs-button/hrs-button.component';


@NgModule({
  declarations: [
    HrsTextboxComponent,
    HrsWidgetComponent,
    HrsFormGroupComponent,
    HrsDatepickerComponent,
    HrsValidationMessageComponent,
    HrsButtonComponent
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgbModule],
  exports: [
    HrsValidationMessageComponent,
    HrsTextboxComponent,
    HrsWidgetComponent,
    HrsFormGroupComponent,
    HrsDatepickerComponent,
    HrsButtonComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {}
