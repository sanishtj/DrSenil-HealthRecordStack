import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { PatinetService } from 'src/app/services/patient.service';
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import * as patientActions from './patient.actions';
import { Patientinfo } from 'src/app/models/patientinfo';

@Injectable()
export class PatientEffects {
  constructor(
    private patientService: PatinetService,
    private actions$: Actions
  ) {}

  @Effect()
  addPatient$: Observable<Action> = this.actions$.pipe(
    ofType(patientActions.PatientActionTypes.ADDPATIENT),
    map((action: patientActions.AddPatient) => action.payload),
    mergeMap((patient: Patientinfo) =>
      this.patientService.addPatient(patient).pipe(
        map(newPatient => new patientActions.AddpatientSuccess(newPatient)),
        catchError(err => of(new patientActions.AddpatientFailiure(err)))
      )
    )
  );
}
