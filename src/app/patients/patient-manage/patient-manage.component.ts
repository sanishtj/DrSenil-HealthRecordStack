import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Patientinfo } from 'src/app/models/patientinfo';
import { emailFormatValidator } from 'src/app/shared/validations/emailformat.directive';
import { mobileFormatValidator } from 'src/app/shared/validations/mobileformat.directive';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { AddPatient } from '../state/patient.actions';

@Component({
  selector: 'hrs-patient-manage',
  templateUrl: './patient-manage.component.html',
  styleUrls: ['./patient-manage.component.css']
})
export class PatientManageComponent implements OnInit {

  patientInfoForm: FormGroup;

  patientInfo: Patientinfo = new Patientinfo();

  constructor(private formBuilder: FormBuilder, private store: Store<AppState>) {

    this.patientInfoForm = this.formBuilder.group({
      fullname: [this.patientInfo.FullName, [Validators.required, Validators.pattern(('[a-zA-Z ]*'))]],
      dob: [this.patientInfo.DOB, [Validators.required]],
      mobile: [this.patientInfo.Mobile, [Validators.required, mobileFormatValidator()]],
      email: [this.patientInfo.Email, [Validators.required, emailFormatValidator()]],
    });
   }

  ngOnInit() {
    // Fetch value for edit and use patchvalue to add them to form
    // this.patientInfoForm.patchValue({
    //   fullname: 'test 123'
    // });
  }

  onDateSelected(date: Date) {
    console.log(date);
  }


  addPatientAndContinue() {
    this.submitForm();

}

submitForm() {
  if (this.patientInfoForm.status === 'VALID') {
    const payload = new Patientinfo();
    payload.FullName = this.fullname.value;
    payload.DOB = this.dob.value;
    payload.Mobile = this.mobile.value;
    payload.Email = this.email.value;
    this.store.dispatch(new AddPatient(payload));
  }
}

addPatient() {
  this.submitForm();
}


  get fullname() {
    return this.patientInfoForm.get('fullname');
  }

  get dob() {
    return this.patientInfoForm.get('dob');
  }

  get mobile() {
    return this.patientInfoForm.get('mobile');
  }

  get email() {
    return this.patientInfoForm.get('email');
  }

}
