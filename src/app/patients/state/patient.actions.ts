import { Action } from '@ngrx/store';
import { Patientinfo } from 'src/app/models/patientinfo';


export enum PatientActionTypes {
  SETCURRENTPATIENT = '[Patient] SetCurrentPatient',
  GETCURRENTPATIENT = '[Patient] GetCurrentPatient',
  CLEARCURRENTPATIENT = '[Patient] ClearCurrentPatient',
  INITIALIZECURRENTPATIENT = '[Patient] InitializeCurrentPatient',
  FETCHPATIENTS = '[Patient] FetchPatients',
  FETCHPATIENTSSUCCESS = '[Patient] FetchPatientsSuccess',
  FETCHPATIENTSFAILURE = '[Patient] FetchPatientsFailiure',
  ADDPATIENT = '[Patient] AddPatient',
  ADDPATIENTSUCCESS = '[Patient] AddpatientSuccess',
  ADDPATIENTFAILURE = '[Patient] AddpatientFailiure',
  UPDATEPATIENT = '[Patient] UpdatePatient',
  UPDATEPATIENTSUCCESS = '[Patient] UpdatePatientSuccess',
  UPDATEPATIENTFAILURE = '[Patient] UpdatePatientFailure',
  DELETEPATIENT = '[Patient] DeletePatient',
  DELETEPATIENTSUCCESS = '[Patient] DeletePatientSuccess',
  DELETEPATIENTFAILURE = '[Patient] DeletePatientFailure',
}

export class GettCurrentPatient implements Action {
  readonly type = PatientActionTypes.GETCURRENTPATIENT;
  constructor(public payload: string) { }
}

export class SetCurrentPatient implements Action {
  readonly type = PatientActionTypes.SETCURRENTPATIENT;
  constructor(public payload: Patientinfo) { }
}

export class ClearCurrentPatient implements Action {
  readonly type = PatientActionTypes.CLEARCURRENTPATIENT;
}

export class InitializeCurrentPatient implements Action {
  readonly type = PatientActionTypes.INITIALIZECURRENTPATIENT;
}

export class FetchPatients implements Action {
  readonly type = PatientActionTypes.FETCHPATIENTS;
  constructor() {}
}

export class FetchPatientsSuccess implements Action {
  readonly type = PatientActionTypes.FETCHPATIENTSSUCCESS;
  constructor(public payload: Patientinfo[]) {}
}

export class FetchPatientsFail implements Action {
  readonly type = PatientActionTypes.FETCHPATIENTSFAILURE;
  constructor(public payload: string) {}
}

export class AddPatient implements Action {
  readonly type = PatientActionTypes.ADDPATIENT;
  constructor(public payload: Patientinfo) {}
}

export class AddpatientSuccess implements Action {
  readonly type = PatientActionTypes.ADDPATIENTSUCCESS;
  constructor(public payload: Patientinfo) {}
}

export class AddpatientFailiure implements Action {
  readonly type = PatientActionTypes.ADDPATIENTFAILURE;
  constructor(public payload: string) {}
}

export class UpdatePatient implements Action {
  readonly type = PatientActionTypes.UPDATEPATIENT;
  constructor(public payload: Patientinfo) {}
}

export class UpdatePatientSuccess implements Action {
  readonly type = PatientActionTypes.UPDATEPATIENTSUCCESS;
  constructor(public payload: Patientinfo) {}
}

export class UpdatePatientFailiure implements Action {
  readonly type = PatientActionTypes.UPDATEPATIENTFAILURE;
  constructor(public payload: string) {}
}

export class DeletePatient implements Action {
  readonly type = PatientActionTypes.DELETEPATIENT;
  constructor(public payload: string) { }
}

export class DeletePatientSuccess implements Action {
  readonly type = PatientActionTypes.DELETEPATIENTSUCCESS;
  constructor(public payload: string) { }
}

export class DeletePatientFail implements Action {
  readonly type = PatientActionTypes.DELETEPATIENTFAILURE;
  constructor(public payload: string) { }
}

export type PatientActions = AddPatient | AddpatientSuccess | AddpatientFailiure
| FetchPatients | FetchPatientsSuccess | FetchPatientsFail | SetCurrentPatient |
ClearCurrentPatient | InitializeCurrentPatient | UpdatePatient | UpdatePatientSuccess
| UpdatePatientFailiure | DeletePatient | DeletePatientSuccess | DeletePatientFail;



