import { Action } from '@ngrx/store';
import { Patientinfo } from 'src/app/models/patientinfo';


export enum PatientActionTypes {
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

export type PatientActions = AddPatient | AddpatientSuccess | AddpatientFailiure
| FetchPatients | FetchPatientsSuccess | FetchPatientsFail;


