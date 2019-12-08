import { Component, OnInit, Input } from '@angular/core';
import { Patientinfo } from 'src/app/models/patientinfo';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SetCurrentPatient, DeletePatient } from '../state/patient.actions';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'hrs-patient-list-datatable',
  templateUrl: './patient-list-datatable.component.html',
  styleUrls: ['./patient-list-datatable.component.scss']
})
export class PatientListDatatableComponent implements OnInit {
  @Input() patients: Patientinfo[];
  dtOptions: DataTables.Settings = {};

  constructor(private router: Router, private store: Store<AppState>) {}

  ngOnInit(): void {
    const that = this;

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
  }

  EditPatient(patient: Patientinfo) {
    this.store.dispatch(new SetCurrentPatient(patient));

    this.router.navigateByUrl('/patients/' + patient.Id + '/manage');
  }

  RemovePatient(patient: Patientinfo) {
    this.store.dispatch(new SetCurrentPatient(patient));
    this.store.dispatch(new DeletePatient(patient.Id));
    this.router.navigate(['patients']);
  }

  AddConsultation(patient: Patientinfo){
    this.store.dispatch(new SetCurrentPatient(patient));

    this.router.navigateByUrl('/patients/' + patient.Id + '/consultations/0/manage');
  }
}
