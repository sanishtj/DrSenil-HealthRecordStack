import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HrsTextboxComponent } from './hrs-textbox/hrs-textbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HrsTextboxComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [HrsTextboxComponent, FormsModule, ReactiveFormsModule]
})
export class SharedModule {}
