import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ConsultationService } from 'src/app/services/consultation.service';
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import * as consultationActions from './consultation.actions';
import { Consultation } from 'src/app/models/consultation';
import { Patientinfo } from 'src/app/models/patientinfo';
import { PatinetService } from 'src/app/services/patient.service';

@Injectable()
export class ConsultationEffects {
  constructor(
    private consultationService: ConsultationService,
    private patientService: PatinetService,
    private actions$: Actions
  ) {}

  
  @Effect()
  getPatientDetail$: Observable<Action> = this.actions$.pipe(
    ofType(consultationActions.ConsultationActionTypes.GETCURRENTPATIENT),
    map((action: consultationActions.GetCurrentPatient) => action.payload),
    mergeMap((pId: string) =>
      this.patientService.getPatient(pId).pipe(
        map(patientDetails => new consultationActions.GetCurrentPatientSuccess(patientDetails)),
        catchError(err => of(new consultationActions.GetCurrentPatientFailure(err)))
      )
    )
  );

  @Effect()
  addConsultation$: Observable<Action> = this.actions$.pipe(
    ofType(consultationActions.ConsultationActionTypes.ADDCONSULTATION),
    map((action: consultationActions.AddConsultation) => action.payload),
    mergeMap((consultation: Consultation) =>
      this.consultationService.addConsultation(consultation).pipe(
        map(newConsultation => new consultationActions.AddConsultationSuccess(newConsultation)),
        catchError(err => of(new consultationActions.AddConsultationFailiure(err)))
      )
    )
  );

  @Effect()
  fetchConsultations$: Observable<Action> = this.actions$.pipe(
    ofType(consultationActions.ConsultationActionTypes.FETCHCONSULTATIONS),
    mergeMap(action =>
      this.consultationService.getConsultations().pipe(
        map(consultations => (new consultationActions.FetchConsultationsSuccess(consultations))),
        catchError(err => of(new consultationActions.FetchConsultationsFail(err)))
      )
    )
  );

  @Effect()
  updateConsultation$: Observable<Action> = this.actions$.pipe(
    ofType(consultationActions.ConsultationActionTypes.UPDATECONSULTATION),
    map((action: consultationActions.UpdateConsultation) => action.payload),
    mergeMap((consultation: Consultation) =>
      this.consultationService.updateConsultation(consultation).pipe(
        map(updatedConsultation => (new consultationActions.UpdateConsultationSuccess(updatedConsultation))),
        catchError(err => of(new consultationActions.UpdateConsultationFailiure(err)))
      )
    )
  );

  @Effect()
  deleteConsultation$: Observable<Action> = this.actions$.pipe(
    ofType(consultationActions.ConsultationActionTypes.DELETECONSULTATION),
    map((action: consultationActions.DeleteConsultation) => action.payload),
    mergeMap((ConsultationId: string) =>
      this.consultationService.deleteConsultation(ConsultationId).pipe(
        map(() => (new consultationActions.DeleteConsultationSuccess(ConsultationId))),
        catchError(err => of(new consultationActions.DeleteConsultationFail(err)))
      )
    )
  );

}

