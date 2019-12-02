import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Patientinfo } from 'src/app/models/patientinfo';
import { emailFormatValidator } from 'src/app/shared/validations/emailformat.directive';
import { mobileFormatValidator } from 'src/app/shared/validations/mobileformat.directive';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { AddPatient, SetCurrentPatient } from '../state/patient.actions';
import { Observable } from 'rxjs';
import * as fromPatients from '../state';

@Component({
  selector: 'hrs-patient-manage',
  templateUrl: './patient-manage.component.html',
  styleUrls: ['./patient-manage.component.css']
})
export class PatientManageComponent implements OnInit {
  patientInfoForm: FormGroup;
  selectedPatient: Patientinfo;
  patientInfo: Patientinfo = new Patientinfo();

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
    private route: ActivatedRoute
  ) {
    this.patientInfoForm = this.formBuilder.group({
      fullname: [
        this.patientInfo.FullName,
        [Validators.required, Validators.pattern('[a-zA-Z ]*')]
      ],
      dob: [this.patientInfo.DOB, [Validators.required]],
      mobile: [
        this.patientInfo.Mobile,
        [Validators.required, mobileFormatValidator()]
      ],
      email: [
        this.patientInfo.Email,
        [Validators.required, emailFormatValidator()]
      ]
    });
  }

  ngOnInit() {
    // const id: string = this.route.snapshot.paramMap.get('id');
    this.store
      .pipe(select(fromPatients.getCurrentPatient))
      .subscribe((patient: Patientinfo) => {

        this.patientInfoForm.patchValue({
          fullname: patient.FullName,
          dob: patient.DOB,
          mobile: patient.Mobile,
          email: patient.Email
        });
        this.patientInfoForm.updateValueAndValidity();
      });
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
