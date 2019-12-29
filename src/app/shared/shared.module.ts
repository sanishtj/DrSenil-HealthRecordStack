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
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import { ContentContainerComponent } from './content-container/content-container.component';
import { SelectComponent } from './select/select.component';
import { FileUploadComponent } from './file-upload/file-upload.component';


@NgModule({
  declarations: [
    HrsTextboxComponent,
    HrsWidgetComponent,
    HrsFormGroupComponent,
    HrsDatepickerComponent,
    HrsValidationMessageComponent,
    HrsButtonComponent,
    ToggleButtonComponent,
    ContentContainerComponent,
    SelectComponent,
    FileUploadComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports: [
    HrsValidationMessageComponent,
    HrsTextboxComponent,
    HrsWidgetComponent,
    HrsFormGroupComponent,
    HrsDatepickerComponent,
    HrsButtonComponent,
    ToggleButtonComponent,
    ContentContainerComponent,
    FileUploadComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {}
