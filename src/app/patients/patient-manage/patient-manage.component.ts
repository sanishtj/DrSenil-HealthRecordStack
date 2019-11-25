import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Patientinfo } from 'src/app/models/patientinfo';

@Component({
  selector: 'hrs-patient-manage',
  templateUrl: './patient-manage.component.html',
  styleUrls: ['./patient-manage.component.css']
})
export class PatientManageComponent implements OnInit {
  patientInfoForm: FormGroup;

  patientInfo: Patientinfo = new Patientinfo();

  constructor(private formBuilder: FormBuilder) {

    this.patientInfoForm = this.formBuilder.group({
      fullname: [this.patientInfo.FullName, [Validators.required]],
      dob: [this.patientInfo.DOB, [Validators.required]],
      mobile: [this.patientInfo.Mobile, [Validators.required]],
      email: [this.patientInfo.Email, [Validators.required, Validators.email]]
    });
   }

  ngOnInit() {

    this.patientInfoForm.patchValue({
      fullname: 'test 123'
    });
   // this.patientInfo.FullName = 'test';
  }

  onDateSelected(date: Date) {
    console.log(date);
  }

  onSubmit() {
    console.log(this.patientInfoForm.value);
  }

}
