import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Patientinfo } from 'src/app/models/patientinfo';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'hrs-patientdetails',
  templateUrl: './patientdetails.component.html',
  styleUrls: ['./patientdetails.component.scss']
})
export class PatientdetailsComponent implements OnInit {
  @Input() patientdetails: Patientinfo;
  @Output() patientDetailsNextClick = new EventEmitter();
  patientInfoForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    
    this.patientInfoForm = this.formBuilder.group({
      fullname: [
        null,
        []
      ],
      age: [null, []],
      mobile: [
        null,
        []
      ],
      email: [
        null,
        []
      ],
      presentingcomplaints:[
        null,[]
      ],
      significantpasthistory:[
        null,[]
      ]
    });

  }

  ngOnInit() {
    
    this.patientInfoForm.patchValue({
      fullname: this.patientdetails.FullName,
      age: this.patientdetails.Age,
      mobile: this.patientdetails.Mobile,
      email: this.patientdetails.Email
    });
    
  }

  get presentingcomplaints() {
    return this.patientInfoForm.get('presentingcomplaints');
  }

  get significantpasthistory() {
    return this.patientInfoForm.get('significantpasthistory');
  }

  addPatientAdditionalInfo(){
    this.patientDetailsNextClick.emit({presentingcomplaints: this.presentingcomplaints.value, significantpasthistory: this.significantpasthistory.value, from: 'patientdetails', to: 'comorbidities' });
    console.log(this.presentingcomplaints.value);
    console.log(this.significantpasthistory.value);
  }

}
