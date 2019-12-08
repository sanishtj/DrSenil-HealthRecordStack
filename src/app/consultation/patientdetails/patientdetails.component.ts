import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import * as fromConsultation from '../state';
import { Patientinfo } from 'src/app/models/patientinfo';
import { GetCurrentPatient } from '../state/consultation.actions';

@Component({
  selector: 'hrs-patientdetails',
  templateUrl: './patientdetails.component.html',
  styleUrls: ['./patientdetails.component.scss']
})
export class PatientdetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private store: Store<AppState>,) { }

  ngOnInit() {
    let patientId: string = this.route.snapshot.params['id'];

    this.store.dispatch(new GetCurrentPatient(patientId));
    
    this.store
      .pipe(select(fromConsultation.getPatientDetails))
      .subscribe((patientdetails: Patientinfo) => {
        console.log(patientdetails);
      });
    // Set Current PAtient

    // Get Current Patient

    // Make the form
  }

}
