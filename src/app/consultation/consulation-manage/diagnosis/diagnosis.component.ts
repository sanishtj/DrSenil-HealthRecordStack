import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'hrs-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css']
})
export class DiagnosisComponent implements OnInit {

  diagnosisForm: FormGroup;
  medicines: FormArray;

  constructor(private formBuilder: FormBuilder) {

    this.diagnosisForm = this.formBuilder.group(
      {
        diagnosis: this.formBuilder.group({
          note: [null, []]
        }),
        treatment: this.formBuilder.group({
          medicines: this.formBuilder.array([this.createItem()])
        }),

      });
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      medicine: [null, []],
      note: [null, []]
    });
  }

  addMedicine(): void {
    debugger;
    this.medicines = (this.diagnosisForm.controls.treatment as FormGroup).controls.medicines as FormArray;
    this.medicines.push(this.createItem());
  }

  ngOnInit() {
  }

}
