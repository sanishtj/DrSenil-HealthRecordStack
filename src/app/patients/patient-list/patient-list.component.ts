import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { FetchPatients } from '../state/patient.actions';
import * as fromPatients from '../state';
import { Observable } from 'rxjs';
import { Patientinfo } from 'src/app/models/patientinfo';

@Component({
  selector: 'hrs-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patients$: Observable<Patientinfo[]>;
  errorMessage$: Observable<string>;

  constructor(private store: Store<fromPatients.State>) { }

  ngOnInit() {
    this.store.dispatch(new FetchPatients());
    this.patients$ = this.store.pipe(select(fromPatients.getPatients));
    this.errorMessage$ = this.store.pipe(select(fromPatients.getError));
  }

}
